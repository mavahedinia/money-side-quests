// Budget planner model. Amounts are CAD; cadence conversions use 52 weeks,
// 26 biweekly periods, 12 months or 4 quarters in a full planning year.
export const CADENCES = Object.freeze([
  {id:'weekly',label:'Weekly',periods:52},
  {id:'biweekly',label:'Every two weeks',periods:26},
  {id:'monthly',label:'Monthly',periods:12},
  {id:'quarterly',label:'Quarterly',periods:4},
  {id:'annually',label:'Annually',periods:1}
]);
export const PLANNER_LIMITS = Object.freeze({year:2026,tfsaAnnual:7000,rrspNewRoomMaximum:33810,rrspEarnedIncomeRate:.18,fhsaNewRoom:8000,fhsaCarryforwardMaximum:8000,fhsaLifetime:40000});
export const plannerBudgetSources = [
  {id:'planner-room-limits',title:'2026 registered-plan dollar limits',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html',reviewedAt:'2026-10-24'},
  {id:'planner-tfsa-room',title:'Calculate your TFSA contribution room',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/calculate-room.html',reviewedAt:'2026-10-24'},
  {id:'planner-rrsp-room',title:'How contributions affect your RRSP deduction limit',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html',reviewedAt:'2026-10-24'},
  {id:'planner-fhsa-room',title:'Participating in your FHSAs',publisher:'Canada Revenue Agency',url:'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/contributing-your-fhsa.html',reviewedAt:'2026-10-24'}
];
const PROVINCE_CODES=['AB','BC','MB','NB','NL','NS','NT','NU','ON','PE','QC','SK','YT'];
const ACCOUNTS=['unregistered','tfsa','rrsp','fhsa'];
const PAYMENTS=['unspecified','debit','credit'];
const MAX_AMOUNT=10000000;
function requireAmount(value,label){if(!Number.isFinite(value)||value<0||value>MAX_AMOUNT)throw new RangeError(`${label} must be a finite amount from 0 to ${MAX_AMOUNT}.`);return value}
function optionalRoom(value,label){return value===null||value===undefined?null:requireAmount(value,label)}
export function annualize(amount,cadence){
  requireAmount(amount,'Amount');
  const entry=CADENCES.find(c=>c.id===cadence);
  if(!entry)throw new RangeError('Unknown budget cadence.');
  return amount*entry.periods;
}
export function summarizeBudget(categories,annualTakeHome){
  if(!Array.isArray(categories)||categories.length>50)throw new TypeError('Use an array of at most 50 categories.');
  requireAmount(annualTakeHome,'Annual take-home income');
  const registeredTotals={tfsa:0,rrsp:0,fhsa:0,unregistered:0};
  let expenseAnnual=0,savingAnnual=0;
  const rows=categories.map(category=>{
    if(!category||!['expense','saving'].includes(category.kind))throw new TypeError('Category must be an expense or saving.');
    const annual=annualize(category.amount,category.cadence);
    if(category.kind==='saving'){
      const account=category.account??'unregistered';
      if(!ACCOUNTS.includes(account))throw new RangeError('Unknown saving account.');
      savingAnnual+=annual;registeredTotals[account]+=annual;
    }else expenseAnnual+=annual;
    return {...category,annual,monthly:annual/12,shareOfIncome:annualTakeHome>0?annual/annualTakeHome:0};
  });
  const allocatedAnnual=expenseAnnual+savingAnnual;
  return {annualTakeHome,expenseAnnual,savingAnnual,allocatedAnnual,remainingAnnual:annualTakeHome-allocatedAnnual,overspendAnnual:Math.max(0,allocatedAnnual-annualTakeHome),registeredTotals,categories:rows};
}

// Confirmed available room is supplied by the user, after prior transactions.
// It is never inferred from salary, age, or an annual headline limit.
// Contributions already made outside this plan and their deductions must be
// accounted for in those input balances. Transfers/special re-participation
// cases are outside this new-cash-contribution planning model.
export function roomAnalysis({totals={},tfsaRoom=null,rrspRoom=null,rrspDeductionRoom=null,fhsaRoom=null,fhsaDeductionRoom=null,fhsaLifetimeUsed=0,fhsaEligible=false}={}){
  if(typeof fhsaEligible!=='boolean')throw new TypeError('FHSA eligibility must be confirmed as a boolean.');
  const planned={};for(const id of ['tfsa','rrsp','fhsa']){const value=totals[id]??0;if(!Number.isFinite(value)||value<0||value>MAX_AMOUNT*52*50)throw new RangeError('Invalid aggregate planned contributions.');planned[id]=value};
  const rooms={tfsa:optionalRoom(tfsaRoom,'TFSA room'),rrsp:optionalRoom(rrspRoom,'RRSP room'),fhsa:optionalRoom(fhsaRoom,'FHSA room')};
  const deductionRooms={rrsp:optionalRoom(rrspDeductionRoom,'RRSP deduction room'),fhsa:optionalRoom(fhsaDeductionRoom,'FHSA deduction room')};
  const used=optionalRoom(fhsaLifetimeUsed,'FHSA lifetime used');
  if(used!==null&&used>PLANNER_LIMITS.fhsaLifetime)throw new RangeError('FHSA lifetime usage cannot exceed this model’s ordinary $40,000 allowance.');
  const flags=[],allowedContributions={},details={};
  for(const id of ['tfsa','rrsp','fhsa']){
    let limit=rooms[id],eligible=id!=='fhsa'||fhsaEligible;
    if(id==='fhsa'){
      if(!eligible){limit=0;if(planned[id]>0)flags.push({account:id,type:'ineligible',message:'FHSA eligibility and an opened account have not been confirmed. The contribution remains in the budget, but no FHSA deduction is included.',planned:planned[id],limit:0});}
      else if(limit!==null&&used!==null)limit=Math.min(limit,Math.max(0,PLANNER_LIMITS.fhsaLifetime-used));
      else limit=null;
    }
    const allowed=limit===null?null:Math.min(planned[id],limit);
    allowedContributions[id]=allowed;
    const excess=limit===null?null:Math.max(0,planned[id]-limit);
    if(planned[id]>0&&limit===null)flags.push({account:id,type:'unknown',message:`${id.toUpperCase()} available room${id==='fhsa'?' or lifetime usage':''} is unknown. Confirm it before treating contributions as permitted.`,planned:planned[id],limit:null});
    if(excess>0&&eligible)flags.push({account:id,type:'excess',message:`Planned ${id.toUpperCase()} contributions exceed the confirmed allowance. All planned cash still counts in the budget; only the permitted portion can be considered for tax modelling.`,planned:planned[id],limit,excess});
    let deductible=0;
    if(id!=='tfsa'){
      const deductionRoom=deductionRooms[id];
      if(planned[id]>0&&eligible&&allowed!==null&&allowed>0&&deductionRoom===null)flags.push({account:id,type:'unknown',message:`${id.toUpperCase()} deduction room is unknown. No current-year deduction is included until it is confirmed.`,planned:planned[id],limit:null});
      if(eligible&&allowed!==null&&deductionRoom!==null)deductible=Math.min(allowed,deductionRoom);
    }
    details[id]={planned:planned[id],room:rooms[id],limit,allowed,excess,deductible,known:limit!==null,eligible};
  }
  return {flags,deductibleRRSP:details.rrsp.deductible,deductibleFHSA:details.fhsa.deductible,allowedContributions,details,limits:{...PLANNER_LIMITS},allRoomKnown:flags.every(f=>f.type!=='unknown'),allPersonalRoomsEntered:rooms.tfsa!==null&&rooms.rrsp!==null&&(!fhsaEligible||rooms.fhsa!==null&&used!==null)};
}
// Ordinary NEW 2026 room only: current salary cannot establish this year's room.
// No unused carried room, unused contributions, PAR/PSPA or other adjustments.
export function rrspNewRoom(priorEarnedIncome,pensionAdjustment=0){
  if(priorEarnedIncome===null||priorEarnedIncome===undefined)return null;
  requireAmount(priorEarnedIncome,'Previous-year earned income');requireAmount(pensionAdjustment,'Previous-year pension adjustment');
  return Math.max(0,Math.min(priorEarnedIncome*.18,PLANNER_LIMITS.rrspNewRoomMaximum)-pensionAdjustment);
}

export function createDefaultPlannerState(){return {version:1,step:1,salary:80000,province:'ON',priorEarnedIncome:null,pensionAdjustment:0,tfsaRoom:null,rrspRoom:null,rrspDeductionRoom:null,fhsaRoom:null,fhsaDeductionRoom:null,fhsaLifetimeUsed:0,fhsaEligible:false,withheldTax:null,categories:[]};}
export function validatePlannerState(input){
  const errors=[];
  if(!input||typeof input!=='object'||Array.isArray(input))return {valid:false,errors:['Planner state must be an object.'],value:null};
  const v={...createDefaultPlannerState(),...input};
  if(input.version!==1)errors.push('Unsupported planner state version.');
  if(!Number.isInteger(v.step)||v.step<1||v.step>3)errors.push('Invalid planner step.');
  if(v.province!==null&&!PROVINCE_CODES.includes(v.province))errors.push('Invalid province or territory.');
  for(const key of ['salary','priorEarnedIncome','tfsaRoom','rrspRoom','rrspDeductionRoom','fhsaRoom','fhsaDeductionRoom','withheldTax'])if(v[key]!==null&&(!Number.isFinite(v[key])||v[key]<0||v[key]>MAX_AMOUNT))errors.push(`Invalid ${key}.`);
  for(const key of ['pensionAdjustment','fhsaLifetimeUsed'])if(!Number.isFinite(v[key])||v[key]<0||v[key]>(key==='fhsaLifetimeUsed'?40000:MAX_AMOUNT))errors.push(`Invalid ${key}.`);
  if(typeof v.fhsaEligible!=='boolean')errors.push('Invalid FHSA eligibility.');
  const normalized=[];
  if(!Array.isArray(v.categories)||v.categories.length>50)errors.push('Use at most 50 budget categories.');
  else{
    const ids=new Set();
    v.categories.forEach((c,index)=>{
      if(!c||typeof c!=='object'||Array.isArray(c)){errors.push(`Invalid category ${index+1}.`);return;}
      if(typeof c.id!=='string'||!/^[a-zA-Z0-9_-]{1,80}$/.test(c.id)||ids.has(c.id))errors.push(`Invalid or duplicate category ID at ${index+1}.`);ids.add(c.id);
      if(typeof c.name!=='string'||!c.name.trim()||c.name.trim().length>80)errors.push(`Invalid category name at ${index+1}.`);
      if(!['expense','saving'].includes(c.kind))errors.push(`Invalid category kind at ${index+1}.`);
      if(!CADENCES.some(cadence=>cadence.id===c.cadence))errors.push(`Invalid cadence at ${index+1}.`);
      if(!Number.isFinite(c.amount)||c.amount<0||c.amount>MAX_AMOUNT)errors.push(`Invalid category amount at ${index+1}.`);
      const account=c.account??'unregistered',payment=c.payment??'unspecified';
      if(!ACCOUNTS.includes(account))errors.push(`Invalid account at ${index+1}.`);
      if(!PAYMENTS.includes(payment))errors.push(`Invalid payment method at ${index+1}.`);
      normalized.push({id:c.id,name:typeof c.name==='string'?c.name.trim():c.name,kind:c.kind,cadence:c.cadence,amount:c.amount,account:c.kind==='saving'?account:'unregistered',payment:c.kind==='expense'?payment:'unspecified'});
    });
  }
  const value=errors.length?null:{version:1,step:v.step,salary:v.salary,province:v.province,priorEarnedIncome:v.priorEarnedIncome,pensionAdjustment:v.pensionAdjustment,tfsaRoom:v.tfsaRoom,rrspRoom:v.rrspRoom,rrspDeductionRoom:v.rrspDeductionRoom,fhsaRoom:v.fhsaRoom,fhsaDeductionRoom:v.fhsaDeductionRoom,fhsaLifetimeUsed:v.fhsaLifetimeUsed,fhsaEligible:v.fhsaEligible,withheldTax:v.withheldTax,categories:normalized};
  return {valid:errors.length===0,errors,value};
}
