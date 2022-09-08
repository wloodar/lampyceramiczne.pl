const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: 'custom',
    },
    trailingSlash: true,
    env: {
        nextImageExportOptimizer_imageFolderPath: 'public/img',
        nextImageExportOptimizer_exportFolderPath: 'out',
        nextImageExportOptimizer_quality: 75,
        nextImageExportOptimizer_storePicturesInWEBP: true,
        nextImageExportOptimizer_generateAndUseBlurImages: true,
    },
}

module.exports = withContentlayer(nextConfig)
