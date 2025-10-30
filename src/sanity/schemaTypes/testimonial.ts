import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "text",
      title: "Testimonial Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position/Role",
      type: "string",
    }),
    defineField({
      name: "avatar",
      title: "Author Avatar",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
