import { defineType, defineField } from "sanity";

export const position = defineType({
  name: "positions",
  title: "Open Positions",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Optional – e.g. Remote, On-site, Hybrid",
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      description: "Optional – e.g. Engineering, Marketing, Design",
    }),
    defineField({
      name: "isOpen",
      title: "Currently Open?",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
