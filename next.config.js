/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Add this for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/Personal-Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Personal-Portfolio/' : '',
  
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
}

module.exports = nextConfig
