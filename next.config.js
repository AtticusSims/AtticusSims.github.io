/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static exports
  images: {
    // Enable SVG optimization
    dangerouslyAllowSVG: true,
    // Apply content security policy
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Optimize images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Required for static export
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Handle trailing slashes consistently
  trailingSlash: true,
  // Remove experimental.appDir as it's not needed and causing warnings
  basePath: "", // Add this for GitHub Pages
  assetPrefix: "/", // Must start with a leading slash
};

module.exports = nextConfig;
