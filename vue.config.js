const { defineConfig } = require('@vue/cli-service')
const path = require("path")

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: '/',
    outputDir: 'docs',
    devServer: {
      proxy: {
        '/api': {
          target: process.env.API_URL,
          changeOrigin: true,
          pathRewrite: {'^/api' : ''}
        }
      }
    },
    chainWebpack: config => {
      const cssRule = config.module.rule('css')
      cssRule.uses.clear()
      cssRule
        .use('sass-loader')
        .loader('sass-loader')
        .tap(options => {
          return options
        })
    }
  }
)
