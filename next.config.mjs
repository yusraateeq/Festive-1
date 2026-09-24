/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // fully static site -> best performance & hosting portability
  trailingSlash: true,       // /about/ style URLs work on any static host
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;