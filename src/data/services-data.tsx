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
      title: "CRM/ERP",
      description:
        "We provide scalable CMS and ERP solutions to streamline content management and business operations. Boost efficiency, automate processes, and gain real-time insights with our customizable platforms.",
    },
    {
      title: "AI Chatbots",
      description:
        "We build intelligent AI chatbots and scraping bots that automate customer interactions and data collection. Streamline communication and gather insights with our powerful, custom-built bots.",
    },
    {
      title: "Automation Softwares",
      description:
        "We deliver custom automation software to streamline your business processes, reduce manual tasks, and boost efficiency with intelligent, scalable solutions.",
    },
    {
      title: "E-commerce ",
      description:
        "We build robust e-commerce platforms with intuitive admin panels, empowering you to manage products, orders, and customer data effortlessly.",
    },
    {
      title: "No Code Sites",
      description:
        "We offer no-code website solutions like WordPress and Shopify, empowering you to build and manage your online presence with ease—no coding required.",
    },
    {
      title: "Landing Pages",
      description:
        "We create sleek, high-converting landing pages for agencies, portfolios, blogs, and more. Showcase your brand with stunning, user-friendly designs.",
    },
    {
      title: "CMS",
      description:
        "We deliver flexible CMS solutions, allowing you to manage and update your website content effortlessly, with no technical expertise needed.",
    },
    {
      title: "SAAS Products",
      description:
        "We create scalable SaaS products that help businesses streamline operations and deliver exceptional user experiences—cloud-based, flexible, and ready to grow with you.",
    },
  ],
  supportData: [
    {
      title: "Built for developers",
      description:
        "Crafted specifically for engineers, developers, and innovators who push boundaries. Our tools are designed to empower those who build the future.",
      icon: <TbTerminal2 />, // Updated icon
    },
    {
      title: "Ease of use",
      description:
        "Our solutions are intuitive and user-friendly, allowing you to focus on creation rather than complexity. No steep learning curves—just results.",
      icon: <TbEaseInOut />, // Updated icon
    },
    {
      title: "Pricing like no other",
      description:
        "Competitive pricing with no hidden fees. What you see is what you get—clear, fair, and flexible for businesses of all sizes.",
      icon: <TbCurrencyDollar />, // Updated icon
    },
    {
      title: "Performance Optimization",
      description: "Speed and efficiency are key. We built to maximize performance, ensuring fast load optimized resource usage for all your operations.",
      icon: <TbCloud />, // Updated icon
    },
    {
      title: "Security First",
      description: "Your data is safe with us. We prioritize security, ensuring that all systems are protected with the latest encryption and safeguards to keep your information secure.",
      icon: <TbRoute />, // Updated icon
    },
    {
      title: "24/7 Customer Support",
      description:
        "Round-the-clock support from our expert team. Whether it’s day or night, we’re here to help whenever you need us.",
      icon: <TbHelp />, // Updated icon
    },
    {
      title: "Custom Integrations",
      description:
        "Seamlessly integrate with your existing tools and platforms. We provide custom solutions that work in harmony with your current systems to streamline workflows.",
      icon: <TbAdjustmentsBolt />, // Updated icon
    },
    {
      title: "User-Centric Design",
      description: "Your users come first. Every product we deliver is designed with the end-user in mind, ensuring an intuitive, seamless experience that keeps them engaged.",
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
  mainHeading: "We don’t just build Apps,   we build Apps that SELLS!",
  description:
    "We deliver top-quality Mobile Applications through a proven development cycle, turning challenges into innovative solutions that ensure your site stands out with exceptional performance and reliability.",
  marqueeContent: [
    " APPLICATION DEVELOPMENT ",
    " APPLICATION DEVELOPMENT ",
    " APPLICATION DEVELOPMENT ",
  ],
  subTypesData: [
    {
      title: "Native Apps",
      description:
        "Apps built specifically for a particular operating system (OS), such as Android or iOS, using platform-specific programming languages (e.g., Swift for iOS, Kotlin for Android).",
    },
    {
      title: "Cross Platform",
      description:
        "Apps that can run on multiple platforms (iOS, Android, etc.) using a single codebase, often built with frameworks like Flutter or React Native.",
    },
    {
      title: "Games",
      description:
        "Mobile games developed for entertainment purposes, ranging from simple 2D games to complex 3D games with immersive experiences. These can be built as native, hybrid, or cross-platform apps.",
    },
    {
      title: "Hybrid App",
      description:
        "These are web apps wrapped in a native container. Technologies like HTML, CSS, and JavaScript are used along with frameworks like Ionic or Apache Cordova to create apps that run on both iOS and Android.",
    },
    {
      title: "Progressive Web Apps",
      description:
        "Web applications that behave like native mobile apps when accessed through a mobile browser. PWAs offer a mobile app-like experience, including offline access and push notifications.",
    },
    {
      title: "On-Demand Apps",
      description:
        "Apps that allow users to book or request services (e.g., Uber, food delivery apps, etc.) directly through the app.",
    },
    {
      title: "Enterprise Mobile Apps",
      description:
        " Custom-built apps tailored to the specific needs of an organization. These apps focus on improving productivity, communication, or business processes within the company.",
    },
    {
      title: "Web-Based Apps",
      description:
        "Mobile-optimized websites that function like an app on a mobile device. These are accessed through web browsers and are not downloadable via app stores.",
    },
  ],
  supportData: [
    {
      title: "Built for developers",
      description:
        "Crafted specifically for engineers, developers, and innovators who push boundaries. Our tools are designed to empower those who build the future.",
      icon: <TbTerminal2 />, // Updated icon
    },
    {
      title: "Ease of use",
      description:
        "Our solutions are intuitive and user-friendly, allowing you to focus on creation rather than complexity. No steep learning curves—just results.",
      icon: <TbEaseInOut />, // Updated icon
    },
    {
      title: "Pricing like no other",
      description:
        "Competitive pricing with no hidden fees. What you see is what you get—clear, fair, and flexible for businesses of all sizes.",
      icon: <TbCurrencyDollar />, // Updated icon
    },
    {
      title: "Performance Optimization",
      description: "Speed and efficiency are key. We built to maximize performance, ensuring fast load optimized resource usage for all your operations.",
      icon: <TbCloud />, // Updated icon
    },
    {
      title: "Security First",
      description: "Your data is safe with us. We prioritize security, ensuring that all systems are protected with the latest encryption and safeguards to keep your information secure.",
      icon: <TbRoute />, // Updated icon
    },
    {
      title: "24/7 Customer Support",
      description:
        "Round-the-clock support from our expert team. Whether it’s day or night, we’re here to help whenever you need us.",
      icon: <TbHelp />, // Updated icon
    },
    {
      title: "Custom Integrations",
      description:
        "Seamlessly integrate with your existing tools and platforms. We provide custom solutions that work in harmony with your current systems to streamline workflows.",
      icon: <TbAdjustmentsBolt />, // Updated icon
    },
    {
      title: "User-Centric Design",
      description: "Your users come first. Every product we deliver is designed with the end-user in mind, ensuring an intuitive, seamless experience that keeps them engaged.",
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
      name: "PHP",
      image: "/stack-icons/php-color.svg",
      brandColor: "#FFFFFF8A",
      colors: [192, 192, 192],
    },
    {
      name: "SWIFT",
      image: "/stack-icons/swift-color.svg",
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
  mainHeading: "We don’t just create designs, we create designs that SELLS!",
  description:
    "We create top-notch UI/UX designs through a user-centered process, turning ideas into intuitive, visually stunning interfaces that provide seamless interactions, ensuring an engaging and reliable user experience.",
  marqueeContent: [" UI/UX DESIGN ", " UI/UX DESIGN ", " UI/UX DESIGN "],
  subTypesData: [
    {
      title: " Interaction Design ",
      description:
        " Creating intuitive and efficient interactions between users and the interface..",
    },
    {
      title: "Visual Design",
      description:
        "The aesthetics of the interface, including layout, colors, typography, and imagery.",
    },
    {
      title: "Information Architecture",
      description:
        "Structuring and organizing content and information for easy navigation.",
    },
    {
      title: "User Research",
      description:
        " Understanding user needs, behaviors, and pain points to guide design decisions.",
    },
    {
      title: "Wireframing",
      description:
        " Creating low-fidelity layouts that outline the structure and placement of elements in the interface.",
    },
    {
      title: "Prototyping",
      description:
        "Building interactive, functional mockups of the design to simulate user experiences.",
    },
    {
      title: " Responsive Design",
      description:
        " Ensuring the design adapts seamlessly to different screen sizes and devices.",
    },
    {
      title: "Usability Testing",
      description:
        "Testing the design with real users to identify issues and improve the interface.",
    },
  ],
  supportData: [
    {
      title: "Built for developers",
      description:
        "Crafted specifically for engineers, developers, and innovators who push boundaries. Our tools are designed to empower those who build the future.",
      icon: <TbTerminal2 />, // Updated icon
    },
    {
      title: "Ease of use",
      description:
        "Our solutions are intuitive and user-friendly, allowing you to focus on creation rather than complexity. No steep learning curves—just results.",
      icon: <TbEaseInOut />, // Updated icon
    },
    {
      title: "Pricing like no other",
      description:
        "Competitive pricing with no hidden fees. What you see is what you get—clear, fair, and flexible for businesses of all sizes.",
      icon: <TbCurrencyDollar />, // Updated icon
    },
    {
      title: "Performance Optimization",
      description: "Speed and efficiency are key. We built to maximize performance, ensuring fast load optimized resource usage for all your operations.",
      icon: <TbCloud />, // Updated icon
    },
    {
      title: "Security First",
      description: "Your data is safe with us. We prioritize security, ensuring that all systems are protected with the latest encryption and safeguards to keep your information secure.",
      icon: <TbRoute />, // Updated icon
    },
    {
      title: "24/7 Customer Support",
      description:
        "Round-the-clock support from our expert team. Whether it’s day or night, we’re here to help whenever you need us.",
      icon: <TbHelp />, // Updated icon
    },
    {
      title: "Custom Integrations",
      description:
        "Seamlessly integrate with your existing tools and platforms. We provide custom solutions that work in harmony with your current systems to streamline workflows.",
      icon: <TbAdjustmentsBolt />, // Updated icon
    },
    {
      title: "User-Centric Design",
      description: "Your users come first. Every product we deliver is designed with the end-user in mind, ensuring an intuitive, seamless experience that keeps them engaged.",
      icon: <TbHeart />, // Updated icon
    },
  ],
  stackData: [
    {
      name: "TAILWIND",
      image: "/stack-icons/tailwindcss-color.svg",
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
