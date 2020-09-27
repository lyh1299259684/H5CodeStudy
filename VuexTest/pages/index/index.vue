<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<view class="title">{{count}}</view>
			<view class="action">
				<button type="default" @click="addCount">增加</button>
				<button type="default" style="margin-left: 24upx;" @click="reduceCount">减少</button>
			</view>
		</view>
	</view>
</template>

<script>
	//还有mapState，mapMutations，mapActions 使用起来是一个道理
	import {mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			addCount() {
				//普通修改值
				this.$store.commit('mutationsAddCount', 10)
				
				//异步修改值，请求接口或者执行任务时间长的时候使用
				// this.$store.dispatch('actionsAddCount', 10)
			},
			reduceCount() {
				//普通修改值
				this.$store.commit('mutationsReduceCount', 10)
				
				//异步修改值，请求接口或者执行任务时间长的时候使用
				// this.$store.dispatch('actionsReduceCount', 10)
			}
		},
		/**
		 * 用来获取修改后的值
		 */
		computed: {
			// count() {
			// 	return this.$store.getters.getterCount
			// },
			/**
			 * 简便方式，直接通过mapGetters获取
			 */
			...mapGetters ({
				count: 'getterCount'
			})
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.action {
		display: flex;
		align-items: center;
	}
</style>
