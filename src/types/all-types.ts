import { JSX } from "react";
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

export type portfolioPageDataType = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  tags: string[];
};


  export type ourTeamTypes = {
     img: string;
    name: string;
    designation: string;
    icons:JSX.Element[];
  };
  export type processTypes = {
    image:string;
    number: string;
    title: string;
    description: string;
  };
