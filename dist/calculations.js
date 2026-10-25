export function repayment(balance,apr,payment){if(!Number.isFinite(balance)||balance<0||!Number.isFinite(apr)||apr<0||!Number.isFinite(payment)||payment<=0)return {error:'Use a positive payment and non-negative balance and APR.'};let b=balance,interest=0,months=0;const rate=apr/1200;if(b===0)return {months:0,interest:0,total:0};if(payment<=b*rate)return {error:'This payment does not cover the monthly interest. The balance will not decrease.'};while(b>.000001&&months<1200){let i=b*rate;interest+=i;b+=i;b-=Math.min(payment,b);months++}if(months>=1200&&b>.000001)return {error:'Repayment takes more than 100 years at this payment. Try increasing it.'};return {months,interest,total:balance+interest}}
export function futureValue(principal,monthly,years,gross,fee){let b=principal;const rate=(gross-fee)/1200;for(let i=0;i<Math.round(years*12);i++)b=b*(1+rate)+monthly;return b}
export const initialBudget={housing:1300,utilities:180,groceries:400,transport:160,debt:160,flexible:400,irregular:200,savings:400};

// Nominal annual rate, monthly contributions at month end. Interest is credited
// monthly (12) or annually (1); annual crediting accrues interest without reinvesting it until year-end.
export function compoundSeries(principal,monthly,years,annualRate,frequency=12,inflation=0){
 if(![principal,monthly,years,annualRate,inflation].every(Number.isFinite)||principal<0||monthly<0||years<1||years>50||annualRate<0||annualRate>30||![1,12].includes(frequency)||inflation<0)throw new RangeError('Invalid compounding inputs');
 let balance=principal,contributed=principal,accrued=0,simpleInterest=0;
 const rows=[{year:0,contributions:principal,compound:principal,simple:principal,real:principal}];
 for(let month=1;month<=Math.round(years*12);month++){
  accrued+=balance*annualRate/1200;
  simpleInterest+=contributed*annualRate/1200;
  if(month%(12/frequency)===0){balance+=accrued;accrued=0}
  balance+=monthly;contributed+=monthly;
  if(month%12===0)rows.push({year:month/12,contributions:contributed,compound:balance,simple:contributed+simpleInterest,real:balance/(1+inflation/100)**(month/12)});
 }
 return rows;
}
// A deliberately simple bond: fixed annual coupon, par repaid at maturity,
// no default, no accrued interest and an annual effective discount rate.
export function bondPrice(face,couponRate,years,marketYield){
 const y=marketYield/100,c=face*couponRate/100;
 let price=0;for(let t=1;t<=years;t++)price+=c/(1+y)**t;
 return price+face/(1+y)**years;
}
export function tradeCosts(amount,commission,spreadPercent,fxPercent,merPercent){
 return {commission,spread:amount*spreadPercent/200,fx:amount*fxPercent/100,annualFund:amount*merPercent/100,entry:commission+amount*spreadPercent/200+amount*fxPercent/100};
}
