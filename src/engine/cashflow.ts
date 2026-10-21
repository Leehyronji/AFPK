import type { Profile } from '../types';
export function monthlySurplus(p: Profile) { return p.monthlyIncome-p.essentialExpenses-p.discretionaryExpenses-p.studentLoan.payment-p.consumerLoan.payment; }
export function netWorth(p: Profile) { return p.assets-p.studentLoan.balance-p.consumerLoan.balance; }
export function validateProfile(p: Profile) {
 const nums=[p.monthlyIncome,p.essentialExpenses,p.discretionaryExpenses,p.assets,p.emergencyCash,p.otherPurposeAssets,p.emergencyTarget,p.housingTarget,p.housingYears,p.studentLoan.balance,p.studentLoan.annualRate,p.studentLoan.payment,p.consumerLoan.balance,p.consumerLoan.annualRate,p.consumerLoan.payment];
 const errors:string[]=[];
 if(nums.some(v=>!Number.isFinite(v)||v<0))errors.push('금액·금리·기간은 0 이상이어야 합니다.');
 if(p.monthlyIncome<=0)errors.push('월 소득은 0보다 커야 합니다.');
 if(p.emergencyCash+p.otherPurposeAssets>p.assets)errors.push('목적별 자산 합계가 금융자산 총액을 초과합니다.');
 if(p.emergencyTarget<=0)errors.push('비상자금 목표는 0보다 커야 합니다.');
 if(p.housingYears<=0)errors.push('주거자금 목표 기간은 0보다 커야 합니다.');
 return errors;
}