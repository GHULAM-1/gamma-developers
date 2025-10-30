export type TeamMember = {
  _id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    upwork?: string;
  };
}
