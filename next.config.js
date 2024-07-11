/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'upload.wikimedia.org', 'example.com', 'play-lh.googleusercontent.com', 'yt3.googleusercontent.com'],
  },
}

module.exports = nextConfig
