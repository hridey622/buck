export interface Startup {
  name: string;
  description: string;
  raised: string;
  target: string;
  investors: number;
  growth: string;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  startups: Startup[];
}