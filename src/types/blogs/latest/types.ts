export type LatestCard = {
  _key: string;
  title: string;
  description: string;
  buttonText: string;
  date: string;
  image: string;
  slug: {
    current: string;
    _type: string;
  };
}

export type LatestSection = {
  title: string;
  subtitle?: string;
  cards: LatestCard[];
}