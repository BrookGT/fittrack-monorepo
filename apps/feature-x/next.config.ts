import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["@fittrack/ui-components", "@fittrack/utils"],
};

export default nextConfig;
