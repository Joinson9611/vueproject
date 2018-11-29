<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of list" :key="item.id" >
        <img class='swiper-img' :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: {
          delay: 1000
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
/* 这里是一个scoped穿透 */
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff !important
/* .wapper里的内容可以解决容器图片加载的“闪烁问题” */
  .wrapper
    overflow: hidden
    width: 100%
    padding-bottom: 30.62%
    height: 0
    font-size: 0
    .swiper-img
      /* width：100%可以使轮播图片自适应不同手机 */
      width: 100%
</style>
