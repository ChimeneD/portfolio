import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    SERVICE_ID: "service_0coki5r",
    TEMPLATE_ID: "template_nuxcdp5",
    USER_ID: "user_jNYkN9QXdmb5abTBl0220",
  },
};

export default nextConfig;
