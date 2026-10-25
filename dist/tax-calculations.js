// Educational 2026 tax model; not a complete tax return or payroll calculator.
// Source/review metadata is exported below. Net income is assumed equal to
// taxable income for the federal BPA test; no income-type-specific adjustments.
export const TAX_YEAR=2026;
export const FEDERAL_BRACKETS=[{upTo:58523,rate:.14},{upTo:117045,rate:.205},{upTo:181440,rate:.26},{upTo:258482,rate:.29},{upTo:Infinity,rate:.33}];
export const ONTARIO_BRACKETS=[{upTo:53891,rate:.0505},{upTo:107785,rate:.0915},{upTo:150000,rate:.1116},{upTo:220000,rate:.1216},{upTo:Infinity,rate:.1316}];
export const ACCOUNT_LIMITS={tfsaAnnual:7000,rrspNewRoomMaximum:33810,rrspEarnedIncomeRate:.18,fhsaNewRoom:8000,fhsaCarryforwardMaximum:8000,fhsaLifetime:40000};
const nonnegative=n=>Number.isFinite(n)?Math.max(0,n):0;
const cents=n=>Math.round((n+Number.EPSILON)*100)/100;
export function bracketBreakdown(income,brackets){income=nonnegative(income);let lower=0;return brackets.map(b=>{const portion=Math.max(0,Math.min(income,b.upTo)-lower);const row={from:lower,upTo:b.upTo,rate:b.rate,portion,tax:portion*b.rate};lower=b.upTo;return row})}
export function progressiveTax(income,brackets){return bracketBreakdown(income,brackets).reduce((sum,b)=>sum+b.tax,0)}
export function federalBasicPersonalAmount(netIncome){const n=nonnegative(netIncome);return cents(n<=181440?16452:n>=258482?14829:16452-(n-181440)*1623/77042)}
export function ontarioHealthPremium(income){const n=nonnegative(income);if(n<=20000)return 0;if(n<=36000)return Math.min(300,.06*(n-20000));if(n<=48000)return Math.min(450,300+.06*(n-36000));if(n<=72000)return Math.min(600,450+.25*(n-48000));if(n<=200000)return Math.min(750,600+.25*(n-72000));return Math.min(900,750+.25*(n-200000))}
export function estimateIncomeTax(income,jurisdiction='ON'){
 const taxable=nonnegative(income),bpa=federalBasicPersonalAmount(taxable);
 const federalGross=progressiveTax(taxable,FEDERAL_BRACKETS),federalCredit=bpa*.14,federal=Math.max(0,federalGross-federalCredit);
 const ontarioGross=progressiveTax(taxable,ONTARIO_BRACKETS),ontarioCredit=12989*.0505,ontarioBasic=Math.max(0,ontarioGross-ontarioCredit);
 const surtax=.2*Math.max(0,ontarioBasic-5818)+.36*Math.max(0,ontarioBasic-7446);
 const provincialBeforeReduction=ontarioBasic+surtax;
 // Basic Ontario tax reduction for a person with no dependants (Y=0).
 const ontarioReduction=Math.max(0,Math.min(provincialBeforeReduction,600-provincialBeforeReduction));
 const healthPremium=ontarioHealthPremium(taxable);
 const provincial=jurisdiction==='ON'?Math.max(0,provincialBeforeReduction-ontarioReduction)+healthPremium:0;
 return {taxableIncome:taxable,bpa,federalGross,federalCredit,federal,ontarioGross,ontarioCredit,ontarioBasic,surtax,ontarioReduction,healthPremium,provincial,total:federal+provincial,jurisdiction};
}
export function deductionSavings(income,deduction,jurisdiction='ON'){const original=nonnegative(income),used=Math.min(original,nonnegative(deduction));const before=estimateIncomeTax(original,jurisdiction),after=estimateIncomeTax(original-used,jurisdiction);return {before,after,deduction:used,saving:Math.max(0,before.total-after.total),averageRate:original?before.total/original:0,marginalRate:estimateIncomeTax(original+1,jurisdiction).total-before.total}}
export function accountContribution({account='rrsp',income=80000,contribution=5000,room=0,deductionRoom=0,lifetimeUsed=0,jurisdiction='ON'}={}){
 const planned=nonnegative(contribution),available=account==='fhsa'?Math.min(nonnegative(room),Math.max(0,40000-nonnegative(lifetimeUsed))):nonnegative(room);
 const allowed=Math.min(planned,available),deductible=account==='tfsa'?0:Math.min(allowed,nonnegative(deductionRoom));
 const result=deductionSavings(income,deductible,jurisdiction);
 return {planned,available,allowed,excess:Math.max(0,planned-available),deductible:result.deduction,unusedDeduction:Math.max(0,allowed-result.deduction),saving:result.saving,roomAfter:Math.max(0,available-allowed),before:result.before,after:result.after};
}
// Ordinary new RRSP room illustration only; excludes PSPA/PAR and other adjustments.
export function newRRSPRoom(earnedIncome,pensionAdjustment=0){return Math.max(0,Math.min(nonnegative(earnedIncome)*.18,33810)-nonnegative(pensionAdjustment))}
export function retirementProjection({currentAge=30,retireAge=65,retirementYears=25,savings=10000,monthly=300,annualReturn=4,inflation=2,cppMonthly=0,oasMonthly=0,pensionMonthly=0,goalMonthly=3000}={}){
 if(![currentAge,retireAge,retirementYears,savings,monthly,annualReturn,inflation,cppMonthly,oasMonthly,pensionMonthly,goalMonthly].every(Number.isFinite)||currentAge<18||retireAge<currentAge||retireAge>80||retirementYears<1||retirementYears>50||annualReturn<=-100||inflation<0)return {error:'Retirement age must be at least your current age. Use a horizon of 1–50 years and valid rates.'};
 // Values are in today's dollars; monthly rate derives from the effective annual real rate.
 const years=retireAge-currentAge,realAnnual=(1+annualReturn/100)/(1+inflation/100)-1,monthlyReal=(1+realAnnual)**(1/12)-1;
 let balance=nonnegative(savings);for(let i=0;i<Math.round(years*12);i++)balance=balance*(1+monthlyReal)+nonnegative(monthly);
 const pensionIncome=nonnegative(cppMonthly)+nonnegative(oasMonthly)+nonnegative(pensionMonthly),gap=Math.max(0,nonnegative(goalMonthly)-pensionIncome);
 const months=Math.round(retirementYears*12);
 // Present value of an inflation-adjusted month-end withdrawal stream, with
 // the same assumed real return before/after retirement. Not a safe withdrawal rule.
 const needed=Math.abs(monthlyReal)<1e-12?gap*months:gap*(1-(1+monthlyReal)**(-months))/monthlyReal;
 return {years,realAnnual,realMonthly:monthlyReal,savingsAtRetirement:balance,monthlyPension:pensionIncome,monthlyGap:gap,requiredSavings:needed,shortfall:Math.max(0,needed-balance),surplus:Math.max(0,balance-needed),goalMonthly:nonnegative(goalMonthly)};
}
export const taxSources=[
{id:'cra-2026-rates',title:'2026 income tax rates and brackets',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html',reviewedAt:'2026-10-24'},
{id:'cra-2026-formulas',title:'2026 payroll formulas: personal amounts, Ontario surtax, tax reduction and health premium',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan/t4127-jan-payroll-deductions-formulas-computer-programs.html',reviewedAt:'2026-10-24'},
{id:'cra-account-limits-2026',title:'2026 registered plan dollar limits',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html',reviewedAt:'2026-10-24'},
{id:'cra-rrsp-room',title:'How contributions affect your RRSP deduction limit',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html',reviewedAt:'2026-10-24'},
{id:'cra-fhsa-room',title:'Participating in your FHSAs',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/contributing-your-fhsa.html',reviewedAt:'2026-10-24'},
{id:'cra-fhsa-deductions',title:'Tax deductions for FHSA contributions',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/tax-deductions-fhsa-contributions.html',reviewedAt:'2026-10-24'},
{id:'cra-tfsa-withdrawals',title:'Withdrawing from a TFSA',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/withdraw.html',reviewedAt:'2026-10-24'},
{id:'canada-retirement-calculator',title:'Canadian Retirement Income Calculator',publisher:'Government of Canada',url:'https://www.canada.ca/en/services/benefits/publicpensions/cpp/retirement-income-calculator.html',reviewedAt:'2026-10-24'}
];
