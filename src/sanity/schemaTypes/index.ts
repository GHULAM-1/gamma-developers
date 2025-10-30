import { type SchemaTypeDefinition } from 'sanity';

import { article } from "./article";
import { discoverCard } from "./discover";
import { faq } from './faq'
import { position } from './openPosition';
import { product } from './product';
import { project } from './project';
import { service } from './service'
import { teamMember } from './team';
import { testimonial } from './testimonial';
import { tags } from './tags';
import { process } from "./processes";
import { value } from './values';
import { latestSection } from "./latest";
import developmentProcess from "./developmentProcess";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    discoverCard,
    faq,
    latestSection,
    position,
    product,
    project,
    service,
    teamMember,
    testimonial,
    tags,
    process,
    value,
    developmentProcess,
  ],
};
