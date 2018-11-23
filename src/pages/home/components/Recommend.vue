<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item boder-bottom" v-for="item in recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" alt="长隆欢乐世界" class="item-img">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'HomeRecommend',
	data () {
		return {
			recommendList: [{
				id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/48/481345746fe3ce9fa3.img.jpg_200x200_fbd18714.jpg',
        title: '长隆欢乐世界',
        desc: '浪漫欢乐之称'
			}, {
				id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg',
        title: '长隆野生动物世界',
        desc: '地地道道地地道道地地道道地地道道地地道道地地道道地地道道地地道道地地道道地地道道地地道道地地道道地地道道地地道道'
			}, {
				id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
        title: '广州长隆旅游度假区',
        desc: '地地道道地地道道地地道道地地道道地地道道地地道道地地道道地地图图地道道地地道道地地道道'
			}]
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.title
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item
		overflow: hidden
		display: flex
		height: 1.9rem
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		.item-info
			flex: 1
			padding: .1rem
			min-width: 0
			.item-title
				height: .54rem
				height-line: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc	
				line-height: .4rem
				color: #ccc
				ellipsis()
			.item-button
				line-height: .44rem
				color: #fff
				margin-top: .2rem
				padding: 0 .2rem
				border-radius: .1rem
				background-color: orange
			
</style>
