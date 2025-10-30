import { defineType, defineField } from "sanity";
import { Tag } from "lucide-react";

export const tags = defineType({
  name: "tags",
  title: "Tags",
  type: "document",
  icon: Tag,

  fields: [
    defineField({
      name: "title",
      title: "Tag Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2),
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
