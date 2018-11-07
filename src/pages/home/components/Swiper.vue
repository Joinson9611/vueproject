<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class='swiper-img' :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: {
          delay: 1000
        }
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/vc/a5/e0/64/c6bd8680fb67247db15df6057b.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/vc/c4/af/5c/7b5c474b2d55284477bcc775cc.png'
      }]
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
