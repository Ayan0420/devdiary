/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
        dangerouslyAllowSVG: true,
    },
    reactStrictMode: false
};

export default nextConfig;
