/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bg3.wiki",
        port: "",
      },
    ],
  },
}

export default nextConfig
