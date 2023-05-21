/** @type {import('next').NextConfig} */
const dotenvLoad = require('dotenv-load');
const nextEnv = require('next-env');
dotenvLoad();

const withNextEnv = nextEnv();

const nextConfig = withNextEnv({
  reactStrictMode: true,
})

module.exports = nextConfig
