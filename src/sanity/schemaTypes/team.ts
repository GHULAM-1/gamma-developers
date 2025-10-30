import { defineType, defineField } from "sanity";

export const teamMember = defineType({
  name: "team",
  title: "Team Members",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({
          name: "linkedin",
          title: "LinkedIn URL",
          type: "url",
          validation: (Rule) =>
            Rule.uri({ allowRelative: false, scheme: ["http", "https"] }),
        }),
        defineField({
          name: "twitter",
          title: "Twitter URL",
          type: "url",
          validation: (Rule) =>
            Rule.uri({ allowRelative: false, scheme: ["http", "https"] }),
        }),
        defineField({
          name: "upwork",
          title: "Upwork URL",
          type: "url",
          validation: (Rule) =>
            Rule.uri({ allowRelative: false, scheme: ["http", "https"] }),
        }),
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first on the team section.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
