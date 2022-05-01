/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "http://localhost:8000/wp-json/jwt-auth/v1/token",
      },
    ];
  },
};

module.exports = nextConfig;
