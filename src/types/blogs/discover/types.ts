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
  image: string; // URL string from query
  slug: string; // ⚠️ This should be string, not { current: string }
  tags: { _id: string; title: string }[];
}



// interface DiscoverCard {
//   _id: string;
//   title: string;
//   subtitle: string;
//   date: string;
//   buttonText: string;
//   image: any;
//   tags: { _id: string; title: string }[];
// }