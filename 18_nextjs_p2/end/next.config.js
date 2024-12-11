/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    loader: "custom"
  }
};

module.exports = nextConfig;
