import { defineType, defineField } from "sanity";

export const faq = defineType({
  name: "faqs",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
