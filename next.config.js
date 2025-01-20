/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    appDir: true
  },
  images:{
    domains: ['github.com']
  }
}
module.exports = {
  reactStrictMode: true,
  i18n,
  nextConfig
};