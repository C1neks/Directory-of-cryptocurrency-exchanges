export interface ExchangesType {
  id: string;
  name: string;
  country: string;
  url: string;
  image: string;
  trust_score_rank: number;
  year_established: number;
  description: string;
}

export interface ExchangesContextType {
  exchanges: ExchangesType[];
}
