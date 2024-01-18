/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
  
      // domains: ['lh3.googleusercontent.com'],
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            pathname: '**',
          },
        ],
      },
  
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  module.exports = nextConfig