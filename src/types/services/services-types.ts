export type Service = {
  _id: string;
  title: string;
  description: string;
  slug?: {
    current: string;
  };
  icon: string;
  iconImage: string;
  iconBg: string;
  image: string;
  order?: number;
};



export type DevelopmentProcess =  {
  _id: string;
  name: string;
  number: number;
  shortDescription: string;
}