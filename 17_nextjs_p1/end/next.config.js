/** @type {import('next').NextConfig} */

// Next.jsに関する設定を定義
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/personal',
        destination: '/08_multipage?step=1'
      },
      {
        source: '/confirm',
        destination: '/08_multipage?step=2'
      }
    ]
  }
};

export default nextConfig;
