/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: [
      "chinatrace.org"
    ]
  },
  experimental: {
    serverActions: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
