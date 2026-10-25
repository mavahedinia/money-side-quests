// Teaching conventions: APR/12, interest before each monthly payment,
// fixed entered minimums, no new borrowing, fees or payment holidays.
const EPS = 1e-7;
const finiteNonNegative = n => Number.isFinite(n) && n >= 0;
export function prioritizeDebts(inputDebts, extraPayment = 0, strategy = 'avalanche') {
  if (!Array.isArray(inputDebts) || !inputDebts.length || !finiteNonNegative(extraPayment) || !['avalanche','snowball'].includes(strategy)) return { error: 'Enter valid debts and a non-negative extra payment.' };
  const debts = inputDebts.map((d,i) => ({id:d.id??String(i),name:d.name??`Debt ${i+1}`,balance:d.balance,apr:d.apr,minPayment:d.minPayment}));
  if (debts.some(d=>![d.balance,d.apr,d.minPayment].every(finiteNonNegative))) return { error:'Balances, APRs and minimums must be non-negative numbers.' };
  const principal = debts.reduce((sum,d)=>sum+d.balance,0);
  const budget = debts.reduce((sum,d)=>sum+(d.balance>EPS?d.minPayment:0),0) + extraPayment;
  if (principal<=EPS) return {months:0,interest:0,totalPaid:0,budget,order:[],rows:[]};
  if (budget<=0) return {error:'A positive monthly payment budget is needed.'};
  let interest=0,totalPaid=0,months=0;const order=[],rows=[];
  while(debts.some(d=>d.balance>EPS)&&months<1200){
    months++;
    const before=debts.map(d=>d.balance);
    for(const d of debts){const charge=d.balance*d.apr/1200;interest+=charge;d.balance+=charge;}
    let remaining=budget;
    // Required fixed minimums are paid first on every debt, capped at amount owed.
    for(const d of debts){const pay=Math.min(d.minPayment,d.balance);d.balance-=pay;remaining-=pay;totalPaid+=pay;}
    const targets=debts.filter(d=>d.balance>EPS).sort((a,b)=> strategy==='avalanche' ? b.apr-a.apr||a.balance-b.balance : a.balance-b.balance||b.apr-a.apr);
    for(const d of targets){if(remaining<=EPS)break;const pay=Math.min(remaining,d.balance);d.balance-=pay;remaining-=pay;totalPaid+=pay;}
    debts.forEach((d,i)=>{if(d.balance<EPS)d.balance=0;if(before[i]>EPS&&d.balance===0)order.push({id:d.id,name:d.name,month:months});});
    rows.push({month:months,balance:debts.reduce((sum,d)=>sum+d.balance,0),interest,totalPaid});
    if(debts.every((d,i)=>d.balance>=before[i]-EPS)) return {error:'This budget does not reduce any debt balance. Increase payments or review rates and terms.',months,budget,interest,remaining:rows.at(-1).balance};
  }
  if(debts.some(d=>d.balance>EPS)) return {error:'Not repaid within the 100-year teaching-model limit. Increase payments or review the plan.',months,budget,interest,remaining:rows.at(-1).balance};
  return {months,interest,totalPaid,budget,order,rows};
}

function simulateCard(balance,payment,rateAtMonth,promoMonths=0){
  let b=balance,interest=0,totalPaid=0,month=0,balanceAtPromo=promoMonths===0?b:null;
  if(b<=EPS)return {months:0,interest:0,totalPaid:0,balanceAtPromo:0};
  while(b>EPS&&month<1200){
    month++;const rate=rateAtMonth(month),charge=b*rate/1200;interest+=charge;b+=charge;
    const pay=Math.min(payment,b);b-=pay;totalPaid+=pay;if(b<EPS)b=0;
    if(month===promoMonths)balanceAtPromo=b;
    // Once the final, ongoing rate applies, a payment covering no more than
    // interest cannot amortize the remaining balance at that same fixed rate.
    if(month>promoMonths&&payment<=charge+EPS&&b>EPS) return {error:'The monthly payment does not cover interest at the ongoing rate.',months:month,interest,totalPaid,balanceAtPromo:balanceAtPromo??b,remaining:b};
  }
  if(balanceAtPromo===null)balanceAtPromo=0; // Paid before the promotional period ended.
  if(b>EPS)return {error:'Not repaid within the 100-year teaching-model limit.',months:month,interest,totalPaid,balanceAtPromo,remaining:b};
  return {months:month,interest,totalPaid,balanceAtPromo};
}
export function compareBalanceTransfer({balance,currentApr,payment,promoApr,promoMonths,feePercent,postApr}){
  if(![balance,currentApr,payment,promoApr,promoMonths,feePercent,postApr].every(finiteNonNegative)||!Number.isInteger(promoMonths)||payment<=0)return {error:'Use non-negative balances, rates and fees, a whole-number promotional period, and a positive payment.'};
  const fee=balance*feePercent/100;
  const existing=simulateCard(balance,payment,()=>currentApr,0);
  const transfer=simulateCard(balance+fee,payment,m=>m<=promoMonths?promoApr:postApr,promoMonths);
  return {fee,existing,transfer,savings:existing.error||transfer.error?null:existing.totalPaid-transfer.totalPaid,originalBalance:balance};
}

export function loanPayment({amount,apr,months,type='standard'}){
 if(!finiteNonNegative(amount)||!finiteNonNegative(apr)||!Number.isInteger(months)||months<1||months>600||!['standard','mortgage'].includes(type))return {error:'Enter a non-negative loan/rate and a whole-number term of 1–600 months.'};
 const monthlyRate=type==='mortgage'?Math.pow(1+apr/200,1/6)-1:apr/1200;
 const payment=monthlyRate===0?amount/months:amount*monthlyRate/(1-Math.pow(1+monthlyRate,-months));
 const total=payment*months;
 return {payment,interest:Math.max(0,total-amount),total,monthlyRate,months,amount};
}

export const debtSources = [
 {id:'fcac-debt-plan',title:'Paying back your debt',publisher:'Financial Consumer Agency of Canada',url:'https://www.canada.ca/en/financial-consumer-agency/services/debt/paying-debt.html',reviewedAt:'2026-10-24'},
 {id:'fcac-debt-consolidation',title:'Debt consolidation and balance transfers',publisher:'Financial Consumer Agency of Canada',url:'https://www.canada.ca/en/financial-consumer-agency/services/debt/debt-consolidation.html',reviewedAt:'2026-10-24'},
 {id:'fcac-card-transfer',title:'How credit cards work',publisher:'Financial Consumer Agency of Canada',url:'https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/credit-card-work.html',reviewedAt:'2026-10-24'},
 {id:'fcac-mortgage-calculator',title:'Mortgage payment calculator',publisher:'Financial Consumer Agency of Canada',url:'https://itools-ioutils.fcac-acfc.gc.ca/MC-CH/MCCalc-CHCalc-eng.aspx',reviewedAt:'2026-10-24'},
 {id:'scotia-mortgage-convention',title:'Mortgage calculator: semi-annual compounding convention',publisher:'Scotiabank',url:'https://www.scotiabank.com/ca/en/personal/mortgages/mortgage-calculator.html',reviewedAt:'2026-10-24'}
];
