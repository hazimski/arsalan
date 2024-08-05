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
      beforeFiles: [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.chatpad.co',
                    },
                    {
                      type: 'query',
                      key: 'path',
                      value: '^.+$', // Matches only if path is not empty
                    },
                ],
                destination: 'https://app.chatpad.co/:path*',
            },
        ]
    }
  }
};

export default nextConfig;
