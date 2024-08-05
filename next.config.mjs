/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['mekoy17nau9fhmpf.public.blob.vercel-storage.com','www.chatbot.com','btrendy.co'],
  },
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/:path*', // Match any path
        has: [
          {
            type: 'host',
            value: 'www.chatpad.co',
          },
        ],
        destination: 'https://app.chatpad.co/:path*', // Redirect to app.chatpad.co
        permanent: true, // Permanent redirect
        // Condition to exclude root path
        missing: [
          {
            type: 'header',
            key: 'x-do-not-redirect',
          },
        ],
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-do-not-redirect',
            value: 'true',
          },
        ],
      },
    ];
  }
  // rewrites() {
  //   return {
  //     afterFiles: [
  //           {
  //               source: '/:path((?!^$).*)',
  //               has: [
  //                   {
  //                       type: 'host',
  //                       value: 'www.chatpad.co',
  //                   }
  //               ],
  //               destination: 'https://app.chatpad.co/:path*',
  //           },
  //       ]
  //   }
  // }
};

export default nextConfig;
