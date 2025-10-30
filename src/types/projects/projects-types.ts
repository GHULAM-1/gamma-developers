export type Project = {
  _id: string;
  title: string;
  description: string;
  image: string;
  order?: number;
  slug: { current: string }; // slug object from Sanity
  tags?: { _id: string; title?: string }[];
}



export type RelatedProject = {
  _id: string;
  title: string;
  description: string;
  image: string;
  slug: { current: string };
  tags?: { label: string }[];
  order?: number;
}