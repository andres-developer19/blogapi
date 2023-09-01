/*  @type {import('next').NextConfig} 
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'reqres.in',
            port: '',
            pathname: '/api/users',
          },
        ],
      },
    }

module.exports = nextConfig
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['reqres.in']
    },
  };
  
  module.exports = nextConfig;
  