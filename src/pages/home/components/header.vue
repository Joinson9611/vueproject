<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont arrow-left">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}

</script>
/*scoped 可以保证CSS样式只对当前组件有效，不对其他组件产生影响*/
<style lang="stylus" scoped>
/*1rem = html font-size = 50px rem根据font-size的尺寸 */
/* @代表src目录 在其他CSS中引入css要加波浪线 ~@*/
/* @import '~@/assets/styles/varibles.styl'*/
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    color: #fff
    background: $bgColor
    .header-left
      width: .64rem
      float: left
      .arrow-left
        margin-left: .24rem
        font-size: .32rem
    .header-input
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      height: .64rem
      line-height: .64rem
      background-color: #fff
      border-radius: .1rem
      color: #ccc
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
