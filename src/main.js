import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app' // 引入App.vue组件，并设置mpType属性的值
console.log(App)
const app = new Vue(App)
app.$mount() // 手动挂载（可以用于延迟挂载）

export default {
//  小程序的配置信息
  config: {
    pages: [
      '^pages/index/main' // 这里也可以自己配置首页（这样会在最终生成的dist/app.json中永远都排在第一个位置，成为首页。）
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一个小程序', // （没生效？？）
      navigationBarTextStyle: 'black'
    }
  }
}
