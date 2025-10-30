import { defineType, defineField } from "sanity";
import { HeartHandshake } from "lucide-react";

export const value = defineType({
  name: "values",
  title: "Core Values",
  type: "document",
  icon: HeartHandshake,
  fields: [
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the order in which the values appear.",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "title",
      title: "Value Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: "text",
      title: "Value Description",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required().min(10),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "text",
      order: "order",
    },
    prepare({ title, subtitle, order }) {
      return {
        title: `${order ? `${order}. ` : ""}${title}`,
        subtitle: subtitle?.slice(0, 60) + (subtitle?.length > 60 ? "..." : ""),
      };
    },
  },
});
