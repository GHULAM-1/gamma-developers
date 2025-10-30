import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
   

    <div className="flex flex-col md:flex-row items-center justify-between w-full p-8 space-y-8 md:space-y-0 md:space-x-12 ml-12 md:ml-24">
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left order-2 md:order-none ml-8 md:ml-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Your Compelling Heading Here
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is the paragraph that provides context and details about your
          heading or the IconCloud component. Make sure it's engaging and
          informative for your users.
        </p>
      </div>

      <div className="w-full md:w-1/2 relative flex size-full items-center justify-center overflow-hidden order-1 md:order-none">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
