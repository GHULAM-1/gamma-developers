// export type DiscoverCard =  {
//   _id: string;
//   title: string;
//   subtitle: string;
//   date: string;
//   buttonText: string;
//   image?: string;
// }

export interface DiscoverCard {
  _id: string;
  title: string;
  subtitle: string;
  date: string;
  buttonText: string;
  image: string;
  slug: string; 
  tags: { _id: string; title: string }[];
}


