const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
      },
    },
  },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/variables.scss";
        @import "@/assets/scss/mixins.scss";
        `,
      },
    },
  },
};
