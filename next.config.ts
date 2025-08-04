import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {hostname:'https://unsplash.com/photos'}
    ]
  }
};

export default nextConfig;
