import Vue from 'vue'
import App from './index'

// 是引入index.vue（该目录下的index.vue）,并创建一个Vue实例
const app = new Vue(App)
app.$mount()

export default {
  config: {
    // 注意，页面级可配置属性相当于只是`src/main.js`中配置里的`window`部分
    navigationBarTitleText: '文章列表页面' // （没生效？？）
  }
}
