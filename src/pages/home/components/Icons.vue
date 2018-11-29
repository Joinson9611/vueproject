<template>
  <div class="icons" >
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-imgcontent" :src="item.imgUrl" >
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoPlay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    overflow: hidden
    position: relative
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      box-sizing: border-box
      padding: .1rem
      position: absolute
      top: 0
      right: 0
      left: 0
      bottom: .30rem
      .icon-imgcontent
        display: block
        margin:0 auto
        height: 100%
    .icon-desc
      padding: .1rem
      position: absolute
      right: 0
      left: 0
      bottom:0
      height: .30rem
      height-line: .30rem
      text-align: center
      ellipsis()
</style>
