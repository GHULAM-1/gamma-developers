
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
}

export type ArticlesTestimonialsProps = {
  showArticles?: boolean;
  showTestimonials?: boolean;
};


export type  RelatedContentProps = {
  currentId: string;
  currentTags: { _id: string; title: string }[];
  type: "article" | "latestCard";
  showArticlesForCard?: boolean; // New prop to show articles for latest cards
}

export type Item = {
  _id: string;
  title: string;
  slug: { current: string } | string;
  description: string;
  image?: string;
  tags?: { _id: string; title: string }[];
  date?: string;
  publishedAt?: string;
}
