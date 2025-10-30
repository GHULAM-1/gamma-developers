export type Product = {
  _id: string;
  title: string;
  description: string;
  tags: { _id: string; title: string }[];
  image: string;
  bgColor?: string;
  isFeatured?: boolean;
};
