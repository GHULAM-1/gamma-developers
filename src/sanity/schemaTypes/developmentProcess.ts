import { defineType, defineField } from "sanity";

export default defineType({
  name: "developmentProcess",
  title: "Development Process",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Step Name",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "number",
      title: "Step Number",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "shortDescription",
      number: "number",
    },
    prepare({ title, subtitle, number }) {
      return {
        title: `Step ${number}: ${title}`,
        subtitle,
      };
    },
  },
});
