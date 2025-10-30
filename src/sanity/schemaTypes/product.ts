import { defineType, defineField } from "sanity";
import { Package } from "lucide-react"; // optional icon

export const product = defineType({
  name: "products",
  title: "Products",
  type: "document",
  icon: Package,

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    // 🟢 Dropdown Tags — same logic as in `projects`
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tags" }], // 👈 must match your tags schema name
        },
      ],
      options: {
        layout: "tags",
      },
      description:
        "Select or create tags for this product (e.g. UI/UX, Branding, Motion Design).",
    }),

    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
      description: "Main visual for this product.",
    }),

    defineField({
      name: "bgColor",
      title: "Background Gradient",
      type: "string",
      description:
        "Tailwind gradient format (e.g., 'from-gray-700 to-gray-600').",
    }),

    // 🟣 Boolean field for Featured Products
    defineField({
      name: "isFeatured",
      title: "Is Featured?",
      type: "boolean",
      description: "Mark this product as featured to highlight it on the site.",
      initialValue: false, // optional default
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "tags",
      media: "image",
      isFeatured: "isFeatured",
    },
    prepare({ title, subtitle, media, isFeatured }) {
      return {
        title: isFeatured ? `⭐ ${title}` : title, // visually mark featured ones
        subtitle: subtitle
          ? subtitle.map((s: any) => s._ref || s).join(", ")
          : "No tags",
        media,
      };
    },
  },
});
