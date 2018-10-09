const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: process.env.BASE_URL || '/',

  // lintOnSave: false,
  productionSourceMap: false,

  transpileDependencies: [
  ],

  chainWebpack: config => {
    // config.optimization.minimize(false)

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.test(/\.svg$/)
      .include
      .add(resolve('src/assets/icons/svg'))
      .end()
      .use('svg-spritse-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },

  devServer: {
    port: 9088,
    proxy: {
      '/v1': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true
      }
    }
  },

  lintOnSave: undefined
}
