const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 720, // UI设计稿的宽度
            unitToConvert: "px", // 要转化的单位
            exclude: [/node_modules/],
          })
        ]
      },
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "./src/style/var.less";`
          }
        }
      }
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
};
