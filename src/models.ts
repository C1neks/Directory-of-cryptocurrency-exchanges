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

export interface SocialUrls {
  facebook_url: string;
  reddit_url: string;
  slack_url: string;
  telegram_url: string;
  twitter_handle: string;
}
