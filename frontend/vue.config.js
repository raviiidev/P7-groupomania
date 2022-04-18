const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
})
export default defineConfig ({
  base : '/P7-Groupomania',
  plugins : [vue()]
})