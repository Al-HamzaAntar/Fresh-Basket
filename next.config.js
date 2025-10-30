/** @type {import('next').NextConfig} */
const nextConfig = {
	// Ensure Next.js treats this folder as the root for tracing and Turbopack
	outputFileTracingRoot: __dirname,
	turbopack: {
		root: __dirname,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
};

module.exports = nextConfig;
