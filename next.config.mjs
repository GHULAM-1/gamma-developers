/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ["images.unsplash.com", "uithemez.com", "cdn.sanity.io"],
  },
};

export default nextConfig;
