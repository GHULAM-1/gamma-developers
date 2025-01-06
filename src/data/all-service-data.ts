import { ServicesType } from "@/types/all-types";

const Service1: ServicesType = {
  serviceSlug: "ai",
  serviceName: "Generative AI",
  hoverText1: "Chatbots",
  hoverText2: "Autocomplete",
  hoverText3: "Speech-to-Text",
  hoverText4: "",
  number: "01.",
  id: 1,
};
const Service2: ServicesType = {
  serviceSlug: "web",
  serviceName: "Web Development",
  hoverText1: "AI/Chatbots",
  hoverText2: "Landing pages",
  hoverText3: "Ecomm",
  hoverText4: "CRM/ERP",
  number: "02.",
  id: 2,
};

const Service3: ServicesType = {
  serviceSlug: "mobile",
  serviceName: "App Development",
  hoverText1: "Native",
  hoverText2: "Cross",
  hoverText3: "Flutter",
  hoverText4: "Swift",
  number: "03.",
  id: 3,
};

const Service4: ServicesType = {
  serviceSlug: "design",
  serviceName: "UI/UX Design",
  hoverText1: "Figma",
  hoverText2: "Visual ",
  hoverText3: "responsive",
  hoverText4: "iconography",
  number: "04.",
  id: 4,
};

export const Services: ServicesType[] = [ Service1, Service2, Service3,Service4];
