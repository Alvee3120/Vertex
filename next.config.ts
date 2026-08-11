import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow the Next.js dev server's JS/HMR assets to be requested when the
  // app is opened via the machine's LAN IP instead of localhost.
  allowedDevOrigins: ["192.168.68.*", "192.168.0.*"],
};

export default nextConfig;
