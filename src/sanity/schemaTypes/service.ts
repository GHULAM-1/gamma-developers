import { defineType, defineField } from "sanity";
import { Settings } from "lucide-react";

export const service = defineType({
  name: "services",
  title: "Services",
  type: "document",
  icon: Settings,

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
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().min(20),
    }),

    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "icon",
      title: "Icon Emoji",
      type: "string",
      description: "Use an emoji like 💻, 🤖, 🧠, etc.",
    }),

    defineField({
      name: "iconImage",
      title: "Icon Image",
      type: "image",
      options: { hotspot: true },
      description: "Upload a small PNG/SVG icon for this service.",
    }),

    defineField({
      name: "iconBg",
      title: "Icon Background Class",
      type: "string",
      description:
        "Tailwind background class (e.g., 'bg-green-700', 'bg-green-900').",
    }),

    defineField({
      name: "order",
      title: "Service Order",
      type: "number",
      description: "Optional: use this to control display order on frontend.",
    }),

    // 🟢 Tags field (like in your project schema)
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tags" }], // 👈 reference to tag document schema
        },
      ],
      options: {
        layout: "tags",
      },
      description:
        "Select or create tags for this service (e.g. Web Development, Cloud, AI).",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "iconImage",
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
