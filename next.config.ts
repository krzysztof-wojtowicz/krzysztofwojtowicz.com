import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // interests section was renamed to activities
  async redirects() {
    return [
      {
        source: "/interests/:slug",
        destination: "/activities/:slug",
        permanent: true,
      },
    ];
  },

  webpack: (config) => {
    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // Apply only to JavaScript/TypeScript files
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
