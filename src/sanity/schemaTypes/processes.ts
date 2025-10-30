import { defineType, defineField } from "sanity";
import { Workflow } from "lucide-react";

export const process = defineType({
  name: "processes",
  title: "Processes",
  type: "document",
  icon: Workflow,
  fields: [
    defineField({
      name: "order",
      title: "Step Order",
      type: "number",
      description: "The order in which this step appears in the process flow.",
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "title",
      title: "Step Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3),
    }),

    defineField({
      name: "paragraph",
      title: "Step Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(10),
    }),

    defineField({
      name: "image",
      title: "Step Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "paragraph",
      media: "image",
      order: "order",
    },
    prepare(selection) {
      const { title, subtitle, media, order } = selection;
      return {
        title: `Step ${order}: ${title}`,
        subtitle: subtitle ? subtitle.slice(0, 50) + "..." : "",
        media,
      };
    },
  },
});
