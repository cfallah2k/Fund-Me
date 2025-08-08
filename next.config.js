/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY || '',
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || '',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || '',
  },
}

module.exports = nextConfig
