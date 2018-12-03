<script>
//  这个文件等价于小程序的app.js
export default {
  created () {
    // // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    console.log('miniApp created')
  }
}
</script>

<style>
</style>
