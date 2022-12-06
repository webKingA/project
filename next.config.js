/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["swiperjs.com","imgv3.fotor.com"]
  }
}

module.exports = nextConfig
