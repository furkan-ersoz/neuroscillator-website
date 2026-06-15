/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const basePath = "/neuroscillator-website";

const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	...(isProduction
		? {
				basePath,
				assetPrefix: `${basePath}/`,
			}
		: {}),
};

module.exports = nextConfig;
