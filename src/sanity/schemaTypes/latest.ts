import { defineType, defineField } from "sanity";

export const latestSection = defineType({
  name: "latestSection",
  title: "Latest Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "Main heading for the section (e.g., 'Latest, What we Do')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle / Description",
      type: "text",
      rows: 3,
      description: "Short paragraph under the heading.",
    }),
    defineField({
      name: "cards",
      title: "Latest Cards",
      type: "array",
      of: [
        defineField({
          name: "latestCard",
          title: "Latest Card",
          type: "object",
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
              title: "Card Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "slug",
              title: "Slug (URL)",
              type: "slug",
              options: {
                source: "title",
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Short Description",
              type: "text",
              rows: 3,
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
              name: "date",
              title: "Date",
              type: "date",
              options: { dateFormat: "MMMM DD, YYYY" },
              validation: (Rule) => Rule.required(),
            }),

            // 🟢 Add Tags dropdown for each card
            defineField({
              name: "tags",
              title: "Tags",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{ type: "tags" }], // make sure you have a tags schema
                },
              ],
              options: {
                layout: "tags",
              },
              description:
                "Select or create tags for this card (e.g., Web Development, Branding).",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "date",
              media: "image",
            },
          },
        }),
      ],
    }),
  ],
});
