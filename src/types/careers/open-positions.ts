// /types/careers/position-types.ts
export type Position = {
  _id: string;
  title: string;
  description: string;
  location?: string;
  department?: string;
  isOpen: boolean;
};
