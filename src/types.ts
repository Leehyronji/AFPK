export type Loan = { balance: number; annualRate: number; payment: number };
export type Profile = {
  monthlyIncome: number; essentialExpenses: number; discretionaryExpenses: number;
  assets: number; emergencyCash: number; otherPurposeAssets: number;
  emergencyTarget: number; housingTarget: number; housingYears: number;
  studentLoan: Loan; consumerLoan: Loan;
};
export type Plan = {id:string;name:string;extraDebt:number;emergencyMonthly:number;housingMonthly:number;note:string};