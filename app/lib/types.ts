export interface Startup {
  id: string;
  name: string;
  description: string;
  fundingGoal: number;
  currentFunding: number;
  category: string;
}

export interface Investment {
  id: string;
  startupId: string;
  amount: number;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

