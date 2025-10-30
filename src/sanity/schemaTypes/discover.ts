// import { defineType, defineField } from "sanity";

// export const discoverCard = defineType({
//   name: "discoverCards",
//   title: "Discover Cards",
//   type: "document",
//   fields: [
//     defineField({
//       name: "image",
//       title: "Card Image",
//       type: "image",
//       options: { hotspot: true },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "title",
//       title: "Heading",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "subtitle",
//       title: "Subheading / Description",
//       type: "text",
//       rows: 3,
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "date",
//       title: "Date",
//       type: "date",
//       options: { dateFormat: "MMMM DD, YYYY" },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "buttonText",
//       title: "Button Text",
//       type: "string",
//       initialValue: "View More",
//       validation: (Rule) => Rule.required(),
//     }),

//     // 🟢 New Tags field (like projects schema)
//     defineField({
//       name: "tags",
//       title: "Tags",
//       type: "array",
//       of: [
//         {
//           type: "reference",
//           to: [{ type: "tags" }], // make sure you have a tags schema
//         },
//       ],
//       options: {
//         layout: "tags",
//       },
//       description:
//         "Select or create tags for this card (e.g. Branding, UX Design).",
//     }),
//   ],
//   preview: {
//     select: {
//       title: "title",
//       subtitle: "date",
//       media: "image",
//     },
//   },
// });

import { defineType, defineField } from "sanity";

export const discoverCard = defineType({
  name: "discoverCards",
  title: "Discover Cards",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subheading / Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "MMMM DD, YYYY" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "View More",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tags" }] }],
      options: { layout: "tags" },
      description: "Select or create tags for this card.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image",
    },
  },
});
