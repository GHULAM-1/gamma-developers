import { defineType, defineField } from "sanity";
import { FileText } from "lucide-react";

export const article = defineType({
  name: "articles",
  title: "Articles",
  type: "document",
  icon: FileText,

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).error("Title is required"),
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(20),
    }),

    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tags" }],
        },
      ],
      options: {
        layout: "tags",
      },
      description:
        "Select or create tags for this article (e.g. Design, Marketing, Business).",
    }),

    // 🟢 ADD THIS CONTENT FIELD
    defineField({
      name: "content",
      title: "Article Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "isPopular",
      title: "Popular Article",
      type: "boolean",
      description: "Mark as featured to highlight on the main page.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? subtitle.slice(0, 50) + "..." : "",
        media,
      };
    },
  },
});