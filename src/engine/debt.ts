import type { Loan } from '../types';
export type LoanResult={months:number;totalInterest:number;schedule:{month:number;beginning:number;interest:number;payment:number;ending:number}[]};
export function simulateLoan(loan:Loan,extra=0,maxMonths=600):LoanResult{
 if([loan.balance,loan.annualRate,loan.payment,extra].some(v=>!Number.isFinite(v)||v<0))throw new Error('잔액·금리·상환액은 음수일 수 없습니다.');
 let b=loan.balance,interestSum=0;const schedule:LoanResult['schedule']=[];
 if(b===0)return{months:0,totalInterest:0,schedule};
 for(let m=1;m<=maxMonths&&b>0.005;m++){const beginning=b,interest=beginning*loan.annualRate/12;const payment=Math.min(beginning+interest,loan.payment+extra);if(payment<=interest&&b>0)throw new Error('상환액이 이자 이하이므로 원금이 감소하지 않습니다.');b=Math.max(0,beginning+interest-payment);interestSum+=interest;schedule.push({month:m,beginning,interest,payment,ending:b});}
 if(b>0.005)throw new Error('설정 기간 안에 상환되지 않습니다.');
 return{months:schedule.length,totalInterest:interestSum,schedule};
}