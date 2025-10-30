// 💡 2. Discover Cards
// export const discoverCardsQuery = `
// *[_type == "discoverCards"] | order(date desc) {
//   _id,
//   title,
//   subtitle,
//   date,
//   buttonText,
//   "image": image.asset->url
// }
// `;

export const discoverCardsQuery = `
*[_type == "discoverCards"] | order(date desc) {
  _id,
  title,
  subtitle,
  date,
  buttonText,
  "image": image.asset->url,
  "slug": slug.current
}
`;


// ❓ 3. FAQs
export const faqsQuery = `*[_type == "faqs"] | order(_createdAt asc){
  _id,
  question,
  answer
}`;


export const latestCardsQuery = `
*[_type == "latestCards"]{
  cards[]{
    _key,
    title,
    description,
    buttonText,
    date,
    "image": image.asset->url
  }
}
`;



// 👔 5. Open Positions
export const positionsQuery = `*[_type == "positions" && isOpen == true] | order(_createdAt desc){
  _id,
  title,
  description,
  location,
  department,
  isOpen
}`;

// 📦 6. Products
export const productsQuery = `*[_type == "products" && isFeatured == true] | order(_createdAt desc){
  _id,
  title,
  description,
  tags[]->{
    _id,
    title
  },
  "image": image.asset->url,
  bgColor,
  isFeatured
}`;

// 🧱 7. Projects
export const projectsQuery = `*[_type == "projects" && defined(slug.current)] | order(order asc){
  _id,
  title,
  description,
  "image": image.asset->url,
  order,
  slug { current },
  tags[]->{_id, title}
}`;


// ⚙️ 8. Services
export const servicesQuery = `*[_type == "services"] | order(order asc){
  _id,
  title,
  description,
  slug,
  icon,
  "iconImage": iconImage.asset->url,
  iconBg,
  "image": image.asset->url,
  order
}`;

// 👥 9. Team Members
export const teamQuery = `*[_type == "team"] | order(order asc){
  _id,
  name,
  role,
  description,
  "image": image.asset->url,
  social {
    linkedin,
    twitter,
    upwork
  },
  order
}`;

// 💬 10. Testimonials
export const testimonialsQuery = `*[_type == "testimonials"] | order(_createdAt desc){
  _id,
  company,
  "logo": logo.asset->url,
  rating,
  text,
  author,
  position,
  "avatar": avatar.asset->url
}`;



// 11. Processes
export const processesQuery = `*[_type == "processes"] | order(order asc) {
  _id,
  order,
  title,
  paragraph,
  "image": image.asset->url
}`;


// 12. Values
export const valuesQuery = `*[_type == "values"] | order(order asc) {
  _id,
  order,
  title,
  text
}`;



// getting one Service 

export const serviceDetailQuery = `
  *[_type == "services" && slug.current == $slug][0]{
    title,
    description,
    image{
      asset->{
        _id,
        url
      }
    },
    icon,
    iconImage{
      asset->{
        _id,
        url
      }
    },
    iconBg,
    order
  }
`;

// Development process
 
export const developmentProcessQuery = `
  *[_type == "developmentProcess"] | order(number asc) {
    _id,
    name,
    number,
    shortDescription
  }
`;



// getting related p[rojects
export const relatedProjectsByServiceQuery = `
  *[_type == "projects" && count(tags[@._ref in *[_type == "services" && slug.current == $slug][0].tags[]._ref]) > 0]{
    _id,
    title,
    description,
    "image": image.asset->url,
    order,
    slug { current },
    tags[]->{ _id, title }
  } | order(order asc)
`;


// getting one article from db

export const articleBySlugQuery = `*[_type == "articles" && slug.current == $slug][0]{
  _id,
  title,
  description,
  "image": image.asset->url,
  "tags": tags[]->{
    _id,
    title
  },
  content,
  publishedAt,
  slug
}`;



// 🧠 1. Articles
export const articlesQuery = `*[_type == "articles" && isPopular == true] | order(publishedAt desc){
  _id,
  title,
  description,
  "image": image.asset->url,
  "tags": tags[]->{
    _id,
    title
  },
  publishedAt,
  slug
}`;

// Updated latestSectionQuery with slug field
export const latestSectionQuery = `
*[_type == "latestSection"]{
  title,
  subtitle,
  cards[]{
    _key,
    title,
    description,
    buttonText,
    date,
    "image": image.asset->url,
    slug
  }
}
`;


//latest card by slug query
export const latestCardBySlugQuery = `
  *[_type == "latestSection" && defined(cards)]{
    title,
    subtitle,
    "cards": cards[]{
      _key,
      title,
      slug,
      description,
      buttonText,
      date,
      "image": image.asset->url,
      "tags": tags[]->{_id, title}
    }
  }[0]
`;

// src/sanity/queries.ts
export const allLatestCardsQuery = `
  *[_type == "latestSection"]{
    cards[]{..., tags[]->}
  }
`;


// Related Articles
export const relatedArticlesByTagsQuery = `
  *[_type == "articles" && _id != $currentId && count(tags[@._ref in $currentTags]) > 0]{
    _id,
    title,
    slug,
    description,
    "image": image.asset->url,
    publishedAt,
    tags[]->{_id, title}
  }
`;

// Fixed Related Latest Cards Query - queries nested cards structure
export const relatedLatestCardsQuery = `
  *[_type == "latestSection"]{
    cards[_key != $currentKey && count(tags[@._ref in $currentTags]) > 0]{
      "_id": _key,
      title,
      slug,
      description,
      image,
      date,
      tags[]->{_id, title}
    }
  }[0].cards[0...3]
`;

// Alternative: If no tags match, get recent cards
export const fallbackLatestCardsQuery = `
  *[_type == "latestSection"]{
    cards[_key != $currentKey][0...3]{
      "_id": _key,
      title,
      slug,
      description,
      image,
      date,
      tags[]->{_id, title}
    }
  }[0].cards
`;

// Fixed Latest Card Query - now returns _id properly and ensures tags are fetched
export const latestCardQuery = (slug: string) => `
  *[_type == "latestSection" && cards[].slug.current match "${slug}"][0]{
    _id,
    title,
    subtitle,
    cards[slug.current == "${slug}"][0]{
      _key,
      title,
      description,
      image,
      date,
      buttonText,
      slug,
      tags[]->{
        _id, 
        title
      },
      content,
      "_id": _key
    }
  }
`;

// Query to get articles with same tags as the latest card
export const relatedArticlesForLatestCardQuery = `
  *[_type == "articles" && count(tags[@._ref in $currentTags]) > 0]{
    _id,
    title,
    slug,
    description,
    "image": image.asset->url,
    publishedAt,
    tags[]->{_id, title}
  } | order(count(tags[@._ref in $currentTags]) desc, publishedAt desc)[0...6]
`;

// Fallback: Get recent articles if no tag matches
export const fallbackArticlesQuery = `
  *[_type == "articles"] | order(publishedAt desc)[0...3]{
    _id,
    title,
    slug,
    description,
    "image": image.asset->url,
    publishedAt,
    tags[]->{_id, title}
  }
`;



// Query for related articles based on discover card tags
export const relatedArticlesForDiscoverQuery = `
  *[_type == "articles" && count((tags[]._ref)[@ in $currentTags]) > 0] 
  | order(publishedAt desc)[0...3]{
    _id, 
    title, 
    description, 
    "image": image.asset->url, 
    slug, 
    tags[]->{_id, title},
    publishedAt
  }
`;


// discoverBySlugQuery;
export const discoverBySlugQuery = `
  *[_type == "discoverCards" && slug.current == $slug][0]{
    _id,
    title,
    subtitle,
    date,
    buttonText,
    image,
    "tags": tags[]->{
      _id,
      title
    }
  }
`;