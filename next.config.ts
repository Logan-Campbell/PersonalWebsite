import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build', // Changes the build output directory to `build`
  turbopack: {
    rules: {
      '*.pdf': {
        type: 'asset',
      },
      '*.png': {
        type: 'asset',
      },
      '*.svg': {
        type: 'asset',
      },
      '*.gif': {
        type: 'asset',
      }
    }
  }
}
 
export default nextConfig
