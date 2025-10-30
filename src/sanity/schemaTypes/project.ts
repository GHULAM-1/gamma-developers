import { defineType, defineField } from "sanity";
import { Briefcase } from "lucide-react";

export const project = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  icon: Briefcase,

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
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // 🟢 Dropdown Tags (linked to tag documents)
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tags" }], // 👈 links to tag.ts schema
        },
      ],
      options: {
        layout: "tags",
      },
      description:
        "Select or create tags for this project (e.g. Web Development, Branding).",
    }),

    defineField({
      name: "order",
      title: "Project Order",
      type: "number",
      description:
        "Optional: use this to control the order of projects on the frontend.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
      subtitle: "description",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: subtitle ? subtitle.slice(0, 50) + "..." : "",
        media,
      };
    },
  },
});
