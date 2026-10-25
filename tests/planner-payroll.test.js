import test from 'node:test';
import assert from 'node:assert/strict';
import {PROVINCES,estimatePayroll,plannerFederalBPA,plannerOntarioHealthPremium} from '../dist/planner-payroll.js';
const close=(a,b,epsilon=.011)=>assert.ok(Math.abs(a-b)<=epsilon,`${a} != ${b}`);

test('all13 provinces and territories produce distinct supported annual estimates',()=>{
 assert.equal(PROVINCES.length,13);assert.equal(new Set(PROVINCES.map(p=>p.code)).size,13);
 const taxes=[];
 for(const {code} of PROVINCES){const r=estimatePayroll({salary:80000,province:code});assert.equal(r.province,code);assert.ok(r.tax>=0&&r.takeHome>0&&r.takeHome<r.gross);close(r.takeHome+r.tax+r.payrollDeductions,r.gross);taxes.push(r.tax)}
 assert.ok(new Set(taxes).size>=11);assert.throws(()=>estimatePayroll({salary:80000,province:'XX'}),RangeError);
});
test('zero salary has no deductions and invalid income is rejected',()=>{
 for(const {code}of PROVINCES){const r=estimatePayroll({salary:0,province:code});assert.equal(r.tax,0);assert.equal(r.payrollDeductions,0);assert.equal(r.takeHome,0)}
 assert.throws(()=>estimatePayroll({salary:-1,province:'ON'}),RangeError);assert.throws(()=>estimatePayroll({salary:NaN,province:'ON'}),RangeError);
});
test('2026 premium ceilings agree with published CPP, EI, QPP and QPIP limits',()=>{
 const on=estimatePayroll({salary:200000,province:'ON'}),qc=estimatePayroll({salary:200000,province:'QC'});
 close(on.cpp,4230.45);assert.equal(on.cpp2,416);close(on.ei,1123.07);assert.equal(on.qpip,0);
 close(qc.cpp,4479.30);assert.equal(qc.cpp2,416);close(qc.ei,895.70);close(qc.qpip,442.90);
 close(on.enhancedPensionDeduction,1127);close(qc.enhancedPensionDeduction,1127);
});
test('Ontario80k hand-worked annual salary case includes employment and premium credits',()=>{
 // Taxable79,073; federal12,405.97 minus3,163.3728 credits;
 // Ontario5,025.6485 minus655.9445 BPA minus234.44726 premiums +750 OHP.
 const r=estimatePayroll({salary:80000,province:'ON'});
 assert.equal(r.taxableIncome,79073);close(r.federalTax,9242.60);close(r.provincialTax,4885.26);close(r.tax,14127.86);close(r.takeHome,60302.62);
});
test('Quebec80k hand-worked case applies abatement and worker deduction without double provincial premium credit',()=>{
 const r=estimatePayroll({salary:80000,province:'QC'});
 assert.equal(r.taxableIncome,79073);assert.equal(r.workerDeduction,1450);assert.equal(r.provincialTaxableIncome,77623);
 close(r.federalTax,7674.84);close(r.provincialTax,9377.84);close(r.tax,17052.68);close(r.takeHome,57012.32);
 close(r.federalBeforeAbatement-r.quebecAbatement,r.federalTax,.02);
});
test('deductions reduce income tax, never CPP/EI or contribution cash flows twice',()=>{
 const base=estimatePayroll({salary:80000,province:'ON'}),after=estimatePayroll({salary:80000,province:'ON',rrspDeduction:3000,fhsaDeduction:2000});
 close(base.tax-after.tax,1482.50);assert.equal(base.cpp,after.cpp);assert.equal(base.ei,after.ei);close(after.takeHome-base.takeHome,1482.50);
 assert.equal(after.registeredDeduction,5000);assert.equal(after.appliedRRSP,3000);assert.equal(after.appliedFHSA,2000);
 const capped=estimatePayroll({salary:20000,province:'QC',rrspDeduction:100000});assert.equal(capped.tax,0);assert.ok(capped.notes.some(n=>n.includes('no more deductions')));
});
test('annual amended BC and NL parameters avoid July catch-up values',()=>{
 // At50k BC taxable49,535, 5.6% tax less BPA and baseCPP/EI credits.
 const bc=estimatePayroll({salary:50000,province:'BC'});
 const expectedBC=.056*(49535-13216-2301.75-815);
 close(bc.provincialTax,expectedBC);
 const nl=estimatePayroll({salary:50000,province:'NL'});
 const expectedNL=44678*.087+(49535-44678)*.145-.087*(13094+2301.75+815);
 close(nl.provincialTax,expectedNL);assert.ok(nl.notes.some(n=>n.includes('low-income')));
});
test('Manitoba frozen bracket and BPA phaseout are applied',()=>{
 const mb=estimatePayroll({salary:50000,province:'MB'});
 const expected=47000*.108+(49535-47000)*.1275-.108*(15780+2301.75+815);
 close(mb.provincialTax,expected);
 const high=estimatePayroll({salary:401127,province:'MB'});assert.equal(high.taxableIncome,400000);
 close(high.provincialTax,47000*.108+53000*.1275+300000*.174-.108*(3519.45+1123.07));
});
test('Ontario health-premium, surtax and single-worker LIFT boundaries are handled',()=>{
 assert.equal(plannerOntarioHealthPremium(20000),0);assert.equal(plannerOntarioHealthPremium(36000),300);assert.equal(plannerOntarioHealthPremium(200600),900);
 const low=estimatePayroll({salary:35000,province:'ON'});close(low.liftCredit,765.75);close(low.provincialTax,522.35);
 assert.ok(estimatePayroll({salary:150000,province:'ON'}).surtax>0);
 assert.equal(plannerFederalBPA(181440),16452);assert.equal(plannerFederalBPA(258482),14829);close(plannerFederalBPA((181440+258482)/2),(16452+14829)/2);
});

test('average and marginal income-tax rates exclude premium payments and use the labelled salary increment',async()=>{const {salaryIncomeTaxRates}=await import('../dist/planner-payroll.js');for(const province of ['ON','QC','BC']){const salary=80000,base=estimatePayroll({salary,province}),next=estimatePayroll({salary:80100,province});const r=salaryIncomeTaxRates({salary,province});assert.equal(r.average,base.tax/salary);assert.ok(Math.abs(r.marginal-(next.tax-base.tax)/100)<1e-12);assert.equal(r.increment,100);assert.ok(r.average<(base.tax+base.payrollDeductions)/salary)}assert.equal(salaryIncomeTaxRates({salary:0,province:'ON'}).average,0)});
