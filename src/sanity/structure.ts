import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("projects").title("Projects"),
      S.documentTypeListItem("products").title("Products"),
      S.documentTypeListItem("services").title("Services"),
      S.documentTypeListItem("articles").title("Articles"),
      S.documentTypeListItem("testimonials").title("Testimonials"),
      S.documentTypeListItem("faqs").title("FAQs"),
      S.documentTypeListItem("positions").title("Open Positions"),
      S.documentTypeListItem("team").title("Team Members"),
      S.documentTypeListItem("discoverCards").title("Discover"),
      S.documentTypeListItem("latestSection").title("Latest Cards"),
      S.documentTypeListItem("tags").title("Tags"),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "projects",
            "products",
            "services",
            "articles",
            "testimonials",
            "faqs",
            "positions",
            "team",
            "discoverCards",
            "latestSection",
            "tags",
          ].includes(listItem.getId() || "")
      ),
    ]);
