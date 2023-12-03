
 /* @type {import('next').NextConfig}  */
 const nextConfig = {
    images: {
        domains: [
            "images.pexels.com",
            "www.pexels.com"
        ]
    }
} 

module.exports = nextConfig 
/* module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
  } */