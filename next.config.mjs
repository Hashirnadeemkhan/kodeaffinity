/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Fix image issues with static exports
  },
};

module.exports = nextConfig;
