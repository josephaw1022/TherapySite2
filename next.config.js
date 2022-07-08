/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    domains: [process.env.IMAGE_BASE_URL, "placeimg.com"],
  }
}

module.exports = nextConfig
