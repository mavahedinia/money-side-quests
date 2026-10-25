// Annual 2026 salary-only planning model. This is deliberately separate from the
// introductory taxable-income calculator used by the lessons.
// Reviewed 2026-10-24 against CRA T4127 January + July annual Option 2 parameters
// and Revenu Québec TP-1015.F-V. Do not use July catch-up rates as annual rates.
export const PAYROLL_YEAR = 2026;
export const PROVINCES = [
 {code:'AB',name:'Alberta'},{code:'BC',name:'British Columbia'},
 {code:'MB',name:'Manitoba'},{code:'NB',name:'New Brunswick'},
 {code:'NL',name:'Newfoundland and Labrador'},{code:'NS',name:'Nova Scotia'},
 {code:'NT',name:'Northwest Territories'},{code:'NU',name:'Nunavut'},
 {code:'ON',name:'Ontario'},{code:'PE',name:'Prince Edward Island'},
 {code:'QC',name:'Quebec'},{code:'SK',name:'Saskatchewan'},{code:'YT',name:'Yukon'}
];
const FEDERAL = [[58523,.14],[117045,.205],[181440,.26],[258482,.29],[Infinity,.33]];
const REGIONS = {
 AB:{bpa:22769,brackets:[[61200,.08],[154259,.10],[185111,.12],[246813,.13],[370220,.14],[Infinity,.15]]},
 BC:{bpa:13216,brackets:[[50363,.056],[100728,.077],[115648,.105],[140430,.1229],[190405,.147],[265545,.168],[Infinity,.205]]},
 // Manitoba froze 2024 thresholds and BPA; the BPA phases out above $200,000.
 MB:{bpa:15780,brackets:[[47000,.108],[100000,.1275],[Infinity,.174]]},
 NB:{bpa:13664,brackets:[[52333,.094],[104666,.14],[193861,.16],[Infinity,.195]]},
 NL:{bpa:13094,brackets:[[44678,.087],[89354,.145],[159528,.158],[223340,.178],[285319,.198],[570638,.208],[1141275,.213],[Infinity,.218]]},
 NS:{bpa:11932,brackets:[[30995,.0879],[61991,.1495],[97417,.1667],[157124,.175],[Infinity,.21]]},
 NT:{bpa:18198,brackets:[[53003,.059],[106009,.086],[172346,.122],[Infinity,.1405]]},
 NU:{bpa:19659,brackets:[[55801,.04],[111602,.07],[181439,.09],[Infinity,.115]]},
 ON:{bpa:12989,brackets:[[53891,.0505],[107785,.0915],[150000,.1116],[220000,.1216],[Infinity,.1316]]},
 PE:{bpa:15000,brackets:[[33928,.095],[65820,.1347],[106890,.166],[142520,.1762],[200000,.19],[Infinity,.20]]},
 QC:{bpa:18952,brackets:[[54345,.14],[108680,.19],[132245,.24],[Infinity,.2575]]},
 SK:{bpa:20381,brackets:[[54532,.105],[155805,.125],[Infinity,.145]]},
 YT:{bpa:16452,brackets:[[58523,.064],[117045,.09],[181440,.109],[500000,.128],[Infinity,.15]]}
};
const round=n=>Math.round((n+Number.EPSILON)*100)/100;
const nonnegative=(n,label)=>{if(!Number.isFinite(n)||n<0)throw new RangeError(label+' must be a finite, non-negative number.');return n};
export function annualBracketTax(income,brackets){let lower=0,total=0;for(const [upper,rate] of brackets){total+=Math.max(0,Math.min(income,upper)-lower)*rate;lower=upper;if(income<=upper)break}return total}
export function plannerFederalBPA(netIncome){if(netIncome<=181440)return 16452;if(netIncome>=258482)return 14829;return round(16452-(netIncome-181440)*(1623/77042))}
export function plannerOntarioHealthPremium(income){
 if(income<=20000)return 0;if(income<=36000)return Math.min(300,.06*(income-20000));if(income<=48000)return Math.min(450,300+.06*(income-36000));if(income<=72000)return Math.min(600,450+.25*(income-48000));if(income<=200000)return Math.min(750,600+.25*(income-72000));return Math.min(900,750+.25*(income-200000));
}
export function estimatePayroll({salary=0,province='ON',rrspDeduction=0,fhsaDeduction=0}={}){
 const gross=nonnegative(salary,'Salary'),rrspRequested=nonnegative(rrspDeduction,'RRSP deduction'),fhsaRequested=nonnegative(fhsaDeduction,'FHSA deduction');
 const code=String(province).toUpperCase(),region=REGIONS[code];
 if(!region)throw new RangeError('Choose a supported Canadian province or territory.');
 const quebec=code==='QC';
 // RRSP/FHSA deductions do not reduce pensionable or insurable employment pay.
 const pensionable=Math.max(0,Math.min(gross,74600)-3500);
 const cppBase=round(pensionable*(quebec?.053:.0495));
 const cppFirstAdditional=round(pensionable*.01);
 const cpp=round(cppBase+cppFirstAdditional);
 const cpp2=round(Math.max(0,Math.min(gross,85000)-74600)*.04);
 const ei=round(Math.min(gross,68900)*(quebec?.013:.0163));
 const qpip=quebec?round(Math.min(gross,103000)*.0043):0;
 const enhancedPensionDeduction=round(cppFirstAdditional+cpp2);
 const preRegisteredIncome=Math.max(0,gross-enhancedPensionDeduction);
 const appliedRRSP=Math.min(rrspRequested,preRegisteredIncome);
 const appliedFHSA=Math.min(fhsaRequested,Math.max(0,preRegisteredIncome-appliedRRSP));
 const registeredDeduction=appliedRRSP+appliedFHSA;
 const taxableIncome=Math.max(0,preRegisteredIncome-registeredDeduction);
 const employmentAmount=Math.min(1501,gross);
 const federalPersonal=plannerFederalBPA(taxableIncome);
 const federalBeforeAbatement=Math.max(0,annualBracketTax(taxableIncome,FEDERAL)-.14*(federalPersonal+cppBase+ei+qpip+employmentAmount));
 const quebecAbatement=quebec?federalBeforeAbatement*.165:0;
 const federalTax=round(Math.max(0,federalBeforeAbatement-quebecAbatement));
 const workerDeduction=quebec?Math.min(1450,gross*.06):0;
 const provincialTaxableIncome=Math.max(0,taxableIncome-workerDeduction);
 let provincialPersonal=region.bpa;
 if(code==='MB')provincialPersonal=round(15780*Math.max(0,Math.min(1,(400000-taxableIncome)/200000)));
 if(code==='YT')provincialPersonal=federalPersonal;
 const creditRate=region.brackets[0][1];
 // Québec's personal credit is used directly; do not also claim a second
 // provincial CPP/EI/QPIP credit. Federal Quebec payroll credits remain above.
 const pensionAndInsuranceCredit=quebec?0:creditRate*(cppBase+ei);
 const territorialEmploymentCredit=code==='YT'?creditRate*employmentAmount:0;
 const personalCredit=creditRate*provincialPersonal;
 const albertaSupplement=code==='AB'?Math.max(0,(personalCredit+pensionAndInsuranceCredit-4896)*.25):0;
 const provincialBasic=Math.max(0,annualBracketTax(provincialTaxableIncome,region.brackets)-personalCredit-pensionAndInsuranceCredit-territorialEmploymentCredit-albertaSupplement);
 let surtax=0,healthPremium=0,taxReduction=0,liftCredit=0;
 if(code==='BC')taxReduction=Math.min(provincialBasic,Math.max(0,690-Math.max(0,taxableIncome-25570)*.0356));
 if(code==='ON'){
  surtax=.2*Math.max(0,provincialBasic-5818)+.36*Math.max(0,provincialBasic-7446);
  const beforeReduction=provincialBasic+surtax;
  taxReduction=Math.max(0,Math.min(beforeReduction,600-beforeReduction));
  // Standard single-person LIFT case: no spouse, no foreign-income adjustments.
  const eligibleLift=Math.max(0,Math.min(875,.0505*gross)-.05*Math.max(0,taxableIncome-32500));
  liftCredit=Math.min(Math.max(0,beforeReduction-taxReduction),eligibleLift);
  healthPremium=plannerOntarioHealthPremium(taxableIncome);
 }
 const provincialTax=round(Math.max(0,provincialBasic+surtax-taxReduction-liftCredit)+healthPremium);
 const tax=round(federalTax+provincialTax),payrollDeductions=round(cpp+cpp2+ei+qpip),takeHome=round(Math.max(0,gross-tax-payrollDeductions));
 const assumptions=[
  '2026 annual estimate for a single employee aged 18–64, with no dependants and one full-year employer; employment and December 31 residence are assumed to be in the selected province or territory.',
  'All salary is pensionable and insurable. Includes ordinary basic personal and employment credits, base CPP/QPP and EI federal/provincial credits where applicable, and deductible enhanced CPP/QPP components.',
  'Take-home is after modelled income tax and statutory employee premiums, but BEFORE the cash cost of RRSP/FHSA/TFSA contributions, optional benefits, pensions, union dues or other paycheque deductions.',
  'No refundable credits or benefit payments, tuition, spouse/dependant/disability/age credits, charitable/medical credits, capital income, alternative minimum tax, special residency rules or Northern residents deduction are calculated.',
  'Tax relief from RRSP/FHSA contributions is estimated by comparing the tax result before and after eligible deductions; it is not a guaranteed refund. Actual refunds also depend on tax withheld and the completed return.'
 ];
 const notes=[];
 if(['NB','NL','NS','PE'].includes(code))notes.push('This '+PROVINCES.find(p=>p.code===code).name+' estimate excludes the province’s low-income tax reduction, which depends on eligibility and adjusted family income; tax may be overstated, especially at lower incomes.');
 if(['NT','NU','YT'].includes(code))notes.push('Territorial cost-of-living and other refundable credits, and Northern residents deductions, are excluded.');
 if(quebec)notes.push('Quebec model includes the 16.5% federal abatement, QPP, lower EI, QPIP and the 6% worker deduction capped at $1,450. It excludes the living-alone credit, solidarity/work-premium credits and any RAMQ prescription-drug premium.');
 if(code==='BC')notes.push('Uses the annual 2026 first-bracket rate of 5.60% and $690 tax reduction, not the 6.14% / $805 July payroll catch-up parameters.');
 if(code==='NL')notes.push('Uses the annual 2026 basic personal amount of $13,094, not the $15,000 July catch-up payroll amount.');
 if(code==='MB')notes.push('Uses the frozen $47,000/$100,000 brackets and $15,780 BPA; the BPA phases out between $200,000 and $400,000 net income.');
 if(rrspRequested+fhsaRequested>registeredDeduction)notes.push('The tax model applies no more deductions than remaining taxable employment income. It does not validate account room or determine unused-deduction carryforwards.');
 return {year:PAYROLL_YEAR,province:code,gross,tax,federalTax,provincialTax,cpp,cpp2,ei,qpip,takeHome,takeHomeBeforeContributions:takeHome,payrollDeductions,taxableIncome,provincialTaxableIncome,enhancedPensionDeduction,cppBase,cppFirstAdditional,workerDeduction,registeredDeduction,appliedRRSP,appliedFHSA,federalBeforeAbatement:round(federalBeforeAbatement),quebecAbatement:round(quebecAbatement),provincialBasic:round(provincialBasic),surtax:round(surtax),healthPremium:round(healthPremium),taxReduction:round(taxReduction),liftCredit:round(liftCredit),assumptions,notes};
}
export const payrollSources=[
 {id:'planner-cra-2026-jan',title:'2026 CRA payroll formulas: basic credits, provincial brackets, CPP and EI',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan/t4127-jan-payroll-deductions-formulas-computer-programs.html',reviewedAt:'2026-10-24'},
 {id:'planner-cra-2026-jul',title:'2026 July amendments and annual Option 2 rates: BC, NL and PEI',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jul/t4127-jul-payroll-deductions-formulas.html',reviewedAt:'2026-10-24'},
 {id:'planner-qc-2026',title:'2026 Quebec source-deduction formulas, QPP and QPIP',publisher:'Revenu Québec',url:'https://www.revenuquebec.ca/en/online-services/forms-and-publications/current-details/tp-1015-f-v/',reviewedAt:'2026-10-24'},
 {id:'planner-qc-worker',title:'Quebec source deductions: worker and additional-QPP deductions',publisher:'Revenu Québec',url:'https://www.revenuquebec.ca/en/businesses/source-deductions-and-employer-contributions/calculating-source-deductions-and-contributions/source-deductions-of-quebec-income-tax/reducing-the-remuneration-subject-to-source-deductions/',reviewedAt:'2026-10-24'},
 {id:'planner-on-lift',title:'Ontario Low-Income Workers Tax Credit',publisher:'Government of Ontario',url:'https://www.ontario.ca/page/low-income-workers-tax-credit',reviewedAt:'2026-10-24'},
 {id:'planner-mb-frozen',title:'2026 Manitoba payroll tables: frozen brackets and personal amount',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4032-payroll-deductions-tables/t4032mb-jan/t4032mb-january-general-information.html',reviewedAt:'2026-10-24'}
];

// Forward estimate on additional gross employment income. Salary-based credits
// and enhanced-pension deductions can affect the income-tax increment; the CPP,
// EI and QPIP payments themselves are excluded from both displayed tax rates.
export function salaryIncomeTaxRates({salary=0,province='ON'}={}){
 const base=estimatePayroll({salary,province}),increment=100;
 const next=estimatePayroll({salary:salary+increment,province});
 return {average:salary>0?base.tax/salary:0,marginal:Math.max(0,(next.tax-base.tax)/increment),increment};
}
