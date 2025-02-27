//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  // Remove the webpack modifications for module federation
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
