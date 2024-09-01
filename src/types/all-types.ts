import React from "react";
export type testimonialsTypes = {
  message: string;
  img: string;
  name: string;
  designation: string;
};
export type PortfolioCardType = {
  name?: string;
  image: string;
  id?: number;
};
export type ServicesType = {
  serviceSlug: string;
  serviceName: string;
  hoverText1?: string;
  hoverText2?: string;
  hoverText3?: string;
  hoverText4?: string;
  number?: string;
  id?: number;
};
export type BlogType = {
  image: string;
  mainText: string;
  ownerName: string;
  ownerImage: string;
  date: string;
  timeToRead: string;
};

export type StackType = {
  name: string;
  image: string;
  brandColor: string;
  colors: number[];
};
