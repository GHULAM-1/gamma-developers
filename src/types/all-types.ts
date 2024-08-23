import React from 'react'

export type PortfolioCardType = {
    name?: string;
    image: string;
    id?: number;
}
export type ServicesType = {
    serviceName: string;
    hoverText1?: string;
    hoverText2?: string;
    hoverText3?: string;
    hoverText4?: string;
    number?: string;
    id?:number;
}
export type BlogType = {
    image: string;
    mainText: string;
    ownerName: string;
    date: string;
    timeToRead: string;
}
