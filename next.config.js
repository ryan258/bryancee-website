// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
            },
          ],
        },
      ]
    },
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/bryancee-website',
  }
  
  module.exports = nextConfig
  