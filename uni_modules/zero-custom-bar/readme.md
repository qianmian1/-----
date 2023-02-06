# zero-custom-bar


## 插件说明

个人仅测试于微信小程序，一个功能完善的自适应头部导航栏组件


## 使用方法

```html
<template>
	<view class="container">
	<!-- 用于首页等，无需返回按钮 -->
		<zero-custom-bar title='zerojs的小程序'></zero-custom-bar>
		
	<!-- 用于二级页面等，需要按钮 -->
		<zero-custom-bar title='zerojs的小程序' :singleIcon="true"></zero-custom-bar>	
		<!-- 或 -->
		<zero-custom-bar title='zerojs的小程序' :zeroCapsule="true" @clickCustom='handleHome'></zero-custom-bar>
		
		<!-- slot用法 -->
		<zero-custom-bar>
		<view class="" slot='left'>
			left
		</view>
		<view class="" >
			默认slot
		</view>
		</zero-custom-bar>
	</view>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		created() {
		},
		methods: {
			handleHome() {
				uni.showToast({
					title: '点击了首页',
					duration: 2000
				});
			}
		},
	}
</script>
	<style lang="scss" scoped>
	</style>
```

## 参数说明

|参数						|类型	|默认值		|描述										|
|--							|--		|--			|--											|
|fixed时生成一个占位的盒子	|Boolean|true		|是否固定在顶部								|
|fixedHolder				|Boolean|true		|fixed时生成一个占位的盒子					|
|backgroundColor			|String	|''			|背景色										|
|color						|String	|'#000000'	|标题颜色									|
|capsuleLeft				|Boolean|true		|左侧盒子（左右同时开启关闭标题才能居中）	|
|capsuleRight				|Boolean|true		|右侧盒子（左右同时开启关闭标题才能居中）	|
|capsuleLeftWidth			|Number	|0			|自定义左侧盒子宽度							|
|capsuleRightWidth			|Number	|0			|自定义右侧盒子宽度							|
|zeroCapsule				|Boolean|false		|作者提供的双按钮胶囊（只位于左侧盒子）		|
|zeroCapsuleIconL			|String	|'back'		|自定义双按钮胶囊左侧图标					|
|zeroCapsuleIconR			|String	|'home'		|自定义双按钮胶囊右侧图标					|
|singleIcon					|Boolean|false		|作者提供的单按钮胶囊（只位于左侧盒子）		|
|singleIconType				|Boolean|'back'		|自定义单按钮胶囊图标						|
|logo						|String	|''			|logo图片,请使用网络路径					|
|title						|String	|''			|自定义标题									|
|navBarHeightCustom			|Number	|0			|自定义导航栏高度（不建议使用）				|
|stopZeroGoBack				|Boolean|false		|关闭返回按钮的默认动作（返回上一页）		|
|logoRadius					|Number	|0			| logo 的圆角值								|

## slot说明
|slot名	|说明				|
|--		|--					|
|default|向导航栏中间插入	|
|left	|向导航栏左侧插入	|
|right	|向导航栏右侧插入	|

## event说明
|事件名		|说明				|返回值	|
|--			|--					|--		|
|@clickBack	|左侧按钮点击时触发	|true	|
|@clickCustom	|右侧按钮点击时触发	|true	|




插件预览:
![code](https://img.jszero.cn/mweb/we_code.jpg)

> 预览的小程序不一定能及时更新当前插件