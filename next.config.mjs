/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "uhdtv.io",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "mango.blender.org",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "download.blender.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
