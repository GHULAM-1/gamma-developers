// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         port: "",
//         pathname: "/images/**",
//       },
//     ],
//   },
//   experimental: {
//     turbo: false,
//   },
// } as any;

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  // Remove the experimental.turbo section entirely for production builds
  // or if you must include it, it should be an object, not a boolean
};

export default nextConfig;