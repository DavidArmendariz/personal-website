module.exports = {
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};
