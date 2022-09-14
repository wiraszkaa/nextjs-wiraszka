/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["a.allegroimg.com", "zawszesuchyekogroszek.pl"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
