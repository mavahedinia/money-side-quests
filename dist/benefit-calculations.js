// 2026, non-Quebec employee, full year with one employer, standard pensionable
// and insurable employment; no age exemptions, elections or special cases.
export const BENEFIT_YEAR=2026;
export function payrollBenefits(salary){
 if(!Number.isFinite(salary)||salary<0)throw new RangeError('Salary must be non-negative');
 const cpp=Math.max(0,Math.min(salary,74600)-3500)*.0595;
 const cpp2=Math.max(0,Math.min(salary,85000)-74600)*.04;
 const ei=Math.min(salary,68900)*.0163;
 return {cpp,cpp2,ei,employee:cpp+cpp2+ei,employerCPP:cpp+cpp2,employerEI:ei*1.4,employer:cpp+cpp2+ei*1.4,beforeTax:salary-cpp-cpp2-ei};
}
export function employerMatch(salary,employeePercent,matchPercent,eligiblePercent){
 if(![salary,employeePercent,matchPercent,eligiblePercent].every(Number.isFinite)||Math.min(salary,employeePercent,matchPercent,eligiblePercent)<0)throw new RangeError('Inputs must be non-negative');
 const employee=salary*employeePercent/100,eligible=salary*eligiblePercent/100;
 const employer=Math.min(employee,eligible)*matchPercent/100;
 const fullMatch=eligible*matchPercent/100;
 return {employee,employer,total:employee+employer,fullMatch,additionalEmployee:Math.max(0,eligible-employee),unclaimedMatch:Math.max(0,fullMatch-employer)};
}
export function insuranceClaim(bill,eligible,deductible,coveragePercent,remainingMax){
 if(![bill,eligible,deductible,coveragePercent,remainingMax].every(Number.isFinite)||Math.min(bill,eligible,deductible,coveragePercent,remainingMax)<0||coveragePercent>100)throw new RangeError('Invalid claim');
 const eligibleAmount=Math.min(bill,eligible);
 const afterDeductible=Math.max(0,eligibleAmount-deductible);
 const insurer=Math.min(afterDeductible*coveragePercent/100,remainingMax);
 return {eligibleAmount,insurer,outOfPocket:bill-insurer,usedDeductible:Math.min(deductible,eligibleAmount),remainingMax:Math.max(0,remainingMax-insurer)};
}
