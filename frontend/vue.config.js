const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
})
const publicPath = process.env.NODE_ENV === 'production' ? '/P7-groupomania/' : '/'
module.exports = {
  publicPath: publicPath,
  }