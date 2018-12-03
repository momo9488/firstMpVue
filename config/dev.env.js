var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: '"http://127.0.0.1:8080/api"'///开发跟生产的配置文件各写后台API的URL地址
})
