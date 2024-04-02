// Author: Raashid M
// WARNING: DO NOT TOUCH THIS FILE IF YOU DON'T KNOW WHAT YOU'RE DOING
// IF YOU TOUCH THIS FILE, YOU WILL BREAK THE BUILD
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  //Output directory
  output: "export",
  //Trailing slash
  trailingSlash: true,
  //React strict mode
  reactStrictMode: true,
  //Target Directory for build
  distDir: "build",
  //Image Optimization (As of now, it is disabled)
  images: {
    unoptimized: true,
  },
  //Environment variables
  env: {},
};

module.exports = nextConfig;
