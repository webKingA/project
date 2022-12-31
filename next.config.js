/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASEURL: "http://62.3.41.67:8090/api",
  },
  images: {
    domains: ["swiperjs.com", "imgv3.fotor.com"],
  },
};

module.exports = nextConfig;
