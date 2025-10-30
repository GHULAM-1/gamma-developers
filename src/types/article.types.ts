export type Article = {
  _id: string;
  title: string;
  description: string;
  image: string;
  tags?: Array<{
    _id: string;
    title: string;
  }>;
  publishedAt: string;
  slug?: {
    current: string;
  };
  content?: any[]; // For the article detail page
};
