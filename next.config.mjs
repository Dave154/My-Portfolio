/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.flaticon.com',
          },
        ],
      },
      allowedDevOrigins: ['192.168.17.80'],
};

export default nextConfig;
