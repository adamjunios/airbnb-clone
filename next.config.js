/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYWRhbWp1bmlvcyIsImEiOiJjbGNseWx0emQxbXU4M29wOHBsY216eXJqIn0.oHhxsrYpzsf24aSaSjJsGw",
  },
};
