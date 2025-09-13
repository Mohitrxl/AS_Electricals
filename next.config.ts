import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // helps catch React issues early
  poweredByHeader: false, // cleaner headers
  experimental: {
    // Enables the React Compiler (future replacement for React Server Components compiler)
    // reactCompiler: true,
  },
};

export default nextConfig;
