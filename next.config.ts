const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React's strict mode
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL || "http://localhost:5000", // Environment variable
  },
  images: {
    domains: ["example.com", "anotherdomain.com"], // Whitelist external image domains
  },
  i18n: {
    locales: ["en", "es"], // Localization support
    defaultLocale: "en", // Default locale
    localeDetection: false, // Disable automatic detection
  },
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/components"),
      "@redux": path.resolve(__dirname, "src/adapters/redux"),
    };
    return config;
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/old-route",
  //       destination: "/new-route",
  //       permanent: true, // 301 redirect
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
