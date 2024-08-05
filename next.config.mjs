/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['mekoy17nau9fhmpf.public.blob.vercel-storage.com','www.chatbot.com','btrendy.co'],
  },
  swcMinify: true
};

export default nextConfig;
