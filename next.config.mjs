/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['mekoy17nau9fhmpf.public.blob.vercel-storage.com','www.chatbot.com','btrendy.co'],
  },
  swcMinify: true,
  rewrites() {
    return {
      afterFiles: [
            {
                source: '/:path((?!^$).*)',
                has: [
                    {
                        type: 'host',
                        value: 'www.chatpad.co',
                    }
                ],
                destination: 'https://app.chatpad.co/:path*',
            },
        ]
    }
  }
};

export default nextConfig;
