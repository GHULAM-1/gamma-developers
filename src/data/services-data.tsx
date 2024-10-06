import {
  TbAdjustmentsBolt,
  TbCloud,
  TbCurrencyDollar,
  TbEaseInOut,
  TbHeart,
  TbHelp,
  TbRoute,
  TbTerminal2,
} from 'react-icons/tb'; // Import from react-icons

import { StackType } from "@/types/all-types";

export const web: servicePageDataType = {
  mainHeading: "We don’t just build websites, we build websites that SELLS!",
  description:
    "We deliver top-quality websites through a proven development cycle, turning challenges into innovative solutions that ensure your site stands out with exceptional performance and reliability.",
  marqueeContent: [
    " WEBSITE DEVELOPMENT ",
    " WEBSITE DEVELOPMENT ",
    " WEBSITE DEVELOPMENT ",
  ],
  subTypesData: [
    {
      title: "HIPAA and SOC2 Compliant",
      description:
        "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
    },
    {
      title: "Automated Social Media Posting",
      description:
        "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
    },
    {
      title: "Content Calendar",
      description:
        "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
    },
    {
      title: "Audience Targeting",
      description:
        "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
    },
    {
      title: "Social Listening",
      description:
        "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
    },
    {
      title: "Customizable Templates",
      description:
        "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
    },
    {
      title: "Collaboration Tools",
      description:
        "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
    },
  ],
  supportData: [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <TbTerminal2 />, // Updated icon
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <TbEaseInOut />, // Updated icon
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <TbCurrencyDollar />, // Updated icon
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <TbCloud />, // Updated icon
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <TbRoute />, // Updated icon
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <TbHelp />, // Updated icon
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <TbAdjustmentsBolt />, // Updated icon
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <TbHeart />, // Updated icon
    },
  ],
  stackData: [
    {
      name: "A W S",
      image: "/stack-icons/amazon-color.svg",
      brandColor: "#FF9900",
      colors: [255, 153, 0],
    },

    {
      name: "REACT",
      image: "/stack-icons/react-color.svg",
      brandColor: "#61DAFB",
      colors: [97, 218, 251],
    },
    {
      name: "NEXTJS",
      image: "/stack-icons/nextjs-color.svg",
      brandColor: "#FFFFFF8A",
      colors: [192, 192, 192],
    },
    {
      name: "SHOPIFY",
      image: "/stack-icons/shopify-color.svg",
      brandColor: "#7AB55C",
      colors: [122, 181, 92],
    },
    {
      name: "FIGMA",
      image: "/stack-icons/figma-color.svg",
      brandColor: "#F24E1E",
      colors: [242, 78, 30],
    },
  ],
  processData: [
    {
      number: 1,
      title: "Website Development",
      description: "We build a website that will help your brand grow.",
    },
    {
      number: 2,
      title: "Social Media Marketing",
      description: "We build a website that will help your brand grow.",
    },
    {
      number: 3,
      title: "Content Marketing",
      description: "We build a website that will help your brand grow.",
    },
  ],
};

export const mobile: servicePageDataType = {
  mainHeading: "We don’t just build websites, we build websites that SELLS!",
  description:
    "We deliver top-quality websites through a proven development cycle, turning challenges into innovative solutions that ensure your site stands out with exceptional performance and reliability.",
  marqueeContent: [
    " APPLICATION DEVELOPMENT ",
    " APPLICATION DEVELOPMENT ",
    " APPLICATION DEVELOPMENT ",
  ],
  subTypesData: [
    {
      title: "HIPAA and SOC2 Compliant",
      description:
        "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
    },
    {
      title: "Automated Social Media Posting",
      description:
        "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
    },
    {
      title: "Content Calendar",
      description:
        "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
    },
    {
      title: "Audience Targeting",
      description:
        "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
    },
    {
      title: "Social Listening",
      description:
        "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
    },
    {
      title: "Customizable Templates",
      description:
        "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
    },
    {
      title: "Collaboration Tools",
      description:
        "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
    },
  ],
  supportData: [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <TbTerminal2 />, // Updated icon
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <TbEaseInOut />, // Updated icon
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <TbCurrencyDollar />, // Updated icon
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <TbCloud />, // Updated icon
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <TbRoute />, // Updated icon
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <TbHelp />, // Updated icon
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <TbAdjustmentsBolt />, // Updated icon
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <TbHeart />, // Updated icon
    },
  ],
  stackData: [
    {
      name: "A W S",
      image: "/stack-icons/amazon-color.svg",
      brandColor: "#FF9900",
      colors: [255, 153, 0],
    },

    {
      name: "REACT",
      image: "/stack-icons/react-color.svg",
      brandColor: "#61DAFB",
      colors: [97, 218, 251],
    },
    {
      name: "NEXTJS",
      image: "/stack-icons/nextjs-color.svg",
      brandColor: "#FFFFFF8A",
      colors: [192, 192, 192],
    },
    {
      name: "SHOPIFY",
      image: "/stack-icons/shopify-color.svg",
      brandColor: "#7AB55C",
      colors: [122, 181, 92],
    },
    {
      name: "FIGMA",
      image: "/stack-icons/figma-color.svg",
      brandColor: "#F24E1E",
      colors: [242, 78, 30],
    },
  ],
  processData: [
    {
      number: 1,
      title: "Website Development",
      description: "We build a website that will help your brand grow.",
    },
    {
      number: 2,
      title: "Social Media Marketing",
      description: "We build a website that will help your brand grow.",
    },
    {
      number: 3,
      title: "Content Marketing",
      description: "We build a website that will help your brand grow.",
    },
  ],
};

export const design: servicePageDataType = {
  mainHeading: "We don’t just build websites, we build websites that SELLS!",
  description:
    "We deliver top-quality websites through a proven development cycle, turning challenges into innovative solutions that ensure your site stands out with exceptional performance and reliability.",
  marqueeContent: [" UI/UX DESIGN ", " UI/UX DESIGN ", " UI/UX DESIGN "],
  subTypesData: [
    {
      title: "HIPAA and SOC2 Compliant",
      description:
        "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
    },
    {
      title: "Automated Social Media Posting",
      description:
        "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
    },
    {
      title: "Content Calendar",
      description:
        "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
    },
    {
      title: "Audience Targeting",
      description:
        "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
    },
    {
      title: "Social Listening",
      description:
        "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
    },
    {
      title: "Customizable Templates",
      description:
        "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
    },
    {
      title: "Collaboration Tools",
      description:
        "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
    },
  ],
  supportData: [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <TbTerminal2 />, // Updated icon
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <TbEaseInOut />, // Updated icon
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <TbCurrencyDollar />, // Updated icon
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <TbCloud />, // Updated icon
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <TbRoute />, // Updated icon
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <TbHelp />, // Updated icon
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <TbAdjustmentsBolt />, // Updated icon
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <TbHeart />, // Updated icon
    },
  ],
  stackData: [
    {
      name: "A W S",
      image: "/stack-icons/amazon-color.svg",
      brandColor: "#FF9900",
      colors: [255, 153, 0],
    },

    {
      name: "REACT",
      image: "/stack-icons/react-color.svg",
      brandColor: "#61DAFB",
      colors: [97, 218, 251],
    },
    {
      name: "NEXTJS",
      image: "/stack-icons/nextjs-color.svg",
      brandColor: "#FFFFFF8A",
      colors: [192, 192, 192],
    },
    {
      name: "SHOPIFY",
      image: "/stack-icons/shopify-color.svg",
      brandColor: "#7AB55C",
      colors: [122, 181, 92],
    },
    {
      name: "FIGMA",
      image: "/stack-icons/figma-color.svg",
      brandColor: "#F24E1E",
      colors: [242, 78, 30],
    },
  ],
  processData: [
    {
      number: 1,
      title: "Website Development",
      description: "We build a website that will help your brand grow.",
    },
    {
      number: 2,
      title: "Social Media Marketing",
      description: "We build a website that will help your brand grow.",
    },
    {
      number: 3,
      title: "Content Marketing",
      description: "We build a website that will help your brand grow.",
    },
  ],
};

export type servicePageDataType = {
  mainHeading: string;
  description: string;
  marqueeContent: string[];
  supportData: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  subTypesData: {
    title: string;
    description: string;
  }[];
  stackData: StackType[];
  processData: {
    number: number;
    title: string;
    description: string;
  }[];
};
