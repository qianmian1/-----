<template>
  <view class="container">
    <view class="zero_nav"
      :style="{ position: fixed ? 'fixed' : 'relative', height: navBarHeightCustom ? navBarHeightCustom + 'px' : navBarHeight + 'px', background: backgroundColor }">
      <view class="tool_bar" :style="{
					marginTop: statusBarHeight + menuBotton + 'px',
					height: menuHeight + 'px',
					lineHeight: menuHeight + 'px'
				}">
        <view class="nav_left" v-if="capsuleLeft"
          :style="{ width: capsuleLeftWidth ? capsuleLeftWidth + 'px' : menuboxWidth + 'px' }">
          <slot name="left" v-if="$slots.left"></slot>
          <view class="capsule_left" v-else-if="zeroCapsule"
            :style="{ height: menuHeight + 'px', width: menuWidth + 'px', left: menuRight + 'px' }">
            <view class="icon icon_left" @click="handleBack">
              <uni-icons color="#000000" :type="zeroCapsuleIconL" size="22"></uni-icons>
            </view>
            <view class="icon_line"></view>
            <view class="icon icon_right" @click="handleHome">
              <uni-icons color="#000000" :type="zeroCapsuleIconR" size="22"></uni-icons>
            </view>
          </view>
          <view class="single_icon" v-else-if="singleIcon"
            :style="{ height: menuHeight + 'px', width: menuHeight + 'px', left: menuRight + 'px' }">
            <view class="icon" @click="handleBack">
              <uni-icons color="#000000" :type="singleIconTypeHome ? 'home' : singleIconType" size="22"></uni-icons>
            </view>
          </view>
        </view>
        <view class="nav_center" :style="{ width: toolBarWidth - menuboxWidth + 'px' }" v-if="$slots.default">
          <slot name="default"></slot>
        </view>
        <view class="nav_center" v-else :style="{ width: toolBarWidth - menuboxWidth + 'px' }">
          <view class="nav_logo" :style="{ 'border-radius': logoRadius+'rpx' }" v-if="logo">
            <image :src="logo" mode="widthFix"></image>
          </view>
          <view class="nav_name" :style="{ color: color }">{{ title }}</view>
        </view>
        <view class="nav_right" v-if="capsuleRight"
          :style="{ width: capsuleRightWidth ? capsuleRightWidth : menuboxWidth + 'px' }">
          <slot name="right"></slot>
        </view>
      </view>
    </view>
    <!-- ??????????????????fixed??????????????????????????? -->
    <view class="temp" v-if="fixed && fixedHolder"
      :style="{ height: navBarHeightCustom ? navBarHeightCustom + 'px' : navBarHeight + 'px' }"></view>
  </view>
</template>

<script setup>
  import {
    ref,
    reactive,
    watch,
    mounted,
    created
  } from "vue";
  const props = defineProps({
    fixed: {
      type: Boolean,
      required: true,
      default: true
    },
    fixedHolder: {
      type: Boolean,
      required: true,
      default: true
    },
    backgroundColor: {
      type: String,
      required: true,
      default: ''
    },
    color: {
      type: String,
      required: true,
      default: '#000000'
    },
    capsuleLeft: {
      type: Boolean,
      required: true,
      default: true
    },
    capsuleRight: {
      type: Boolean,
      required: true,
      default: true
    },
    capsuleLeftWidth: {
      type: Number,
      required: true,
      default: 0
    },
    capsuleRightWidth: {
      type: Number,
      required: true,
      default: 0
    },
    zeroCapsule: {
      type: Boolean,
      required: true,
      default: false
    },
    zeroCapsuleIconL: {
      type: String,
      required: true,
      default: 'back'
    },
    zeroCapsuleIconR: {
      type: String,
      required: true,
      default: 'home'
    },
    singleIcon: {
      type: Boolean,
      required: true,
      default: false
    },
    singleIconType: {
      type: String,
      required: true,
      default: 'back'
    },
    logo: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    navBarHeightCustom: {
      type: Number,
      required: true,
      default: 0
    },
    stopZeroGoBack: {
      type: Boolean,
      required: true,
      default: false
    },
    logoRadius: {
      type: Number,
      required: true,
      default: 0
    }
  })
  name: 'zero-custom-bar'
  let em = defineEmits(['clickBack', 'clickCustom'])
  // ????????????
  let statusBarHeight = ref(20)
  // ???????????????
  let navBarHeight = ref(60)
  // ?????????????????????
  let menuRight = ref(7)
  // ???????????????????????????????????????????????????
  let menuBotton = ref(4)
  // ???????????????????????????????????????????????????????????????
  let menuHeight = ref(32)
  // ????????????
  let menuWidth = ref(87)
  // ??????????????????
  let menuboxWidth = ref(101)
  // ????????????????????? 100% - ??????????????????
  let toolBarWidth = ref(0)
  let singleIconTypeHome = ref(true)
  getSysInfo();
  mounted(() => {
    let pages = getCurrentPages();
    // console.log('pages', pages);
    singleIconTypeHome.value = pages.length == 1 ? true : false;
  })

  let getSysInfo = () => {
    const systemInfo = uni.getSystemInfoSync();
    // ???????????????????????????
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    // console.log('menuButtonInfo', menuButtonInfo);
    // ????????????
    statusBarHeight.value = systemInfo.statusBarHeight;
    // ??????????????? = ?????????????????????????????? ?????????????????? - ??????????????? ???*2  +  ????????????  +  ???????????????
    navBarHeight.value = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo
      .statusBarHeight;
    menuBotton.value = menuButtonInfo.top - systemInfo.statusBarHeight; // ???????????????????????????????????????????????????
    menuHeight.value = menuButtonInfo.height; // ???????????????????????????????????????????????????????????????
    menuRight.value = systemInfo.screenWidth - menuButtonInfo.right; // ?????????????????????
    menuboxWidth.value = menuButtonInfo.width + this.menuRight * 2; // ??????????????????
    toolBarWidth.value = systemInfo.screenWidth - this.menuboxWidth; // ????????????????????? 100% - ??????????????????
  }
  let getNavInfo = () => {
    const info = [{
        key: 'statusBarHeight',
        value: statusBarHeigh.value,
        name: '?????????(??????)??????'
      },
      {
        key: 'navBarHeight',
        value: navBarHeight.value,
        name: '???????????????'
      },
      {
        key: 'menuWidth',
        value: menuWidth.value,
        name: '????????????'
      },
      {
        key: 'menuHeight',
        value: menuHeight.value,
        name: '????????????'
      },
      {
        key: 'menuRight',
        value: menuRight.value,
        name: '??????????????????'
      },
      {
        key: 'menuBotton',
        value: menuBotton.value,
        name: '?????????????????????'
      },
      {
        key: 'menuboxWidth',
        value: menuboxWidth.value,
        name: '??????????????????'
      }
    ];
    return info;
  }
  let handleBack = () => {
    (function() {
      em('clickBack', true)
    })()
    if (!this.stopZeroGoBack) {
      if (this.singleIconTypeHome) {
        wx.reLaunch({
          url: '/pages/index/index',
        })
      } else {
        uni.navigateBack();
      }
    }
  }
  let handleHome = () => {
    em('clickCustom', true);
  }
</script>

<style lang="scss" scoped>
  .zero_nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
    overflow: hidden;
  }

  .tool_bar {
    display: flex;
    flex-flow: row nowrap;
  }

  .nav_left {
    height: 100%;
    flex-shrink: 0;
    position: relative;
  }

  .nav_center {
    height: 100%;
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;

    .nav_logo {
      width: 32px;
      height: 32px;
      overflow: hidden;
      flex-shrink: 0;
      margin-right: 10rpx;

      image {
        // display: block;
        width: 100%;
        height: 100%;
      }
    }

    .nav_name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
      font-size: 34rpx;
    }
  }

  .nav_right {
    height: 100%;
    flex-shrink: 0;
    position: relative;
  }

  .capsule_left {
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 50px;
    border: 0.5px solid rgba(#cccccc, 0.7);
    box-sizing: border-box;
    overflow: hidden;
    z-index: 1;

    .icon {
      width: 50%;
      padding-top: 2px;
      text-align: center;
      background: rgba(255, 255, 255, 0.7);

      &:active {
        filter: brightness(0.7);
      }
    }

    .icon_line {
      width: 0.5px;
      height: 18px;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .icon_left {
      padding-left: 5px;
    }

    .icon_right {
      padding-right: 5px;
    }
  }

  .single_icon {
    position: absolute;
    border: 0.5px solid rgba(#cccccc, 0.7);
    box-sizing: border-box;
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;

    .icon {
      width: 100%;
      height: 100%;
      // padding-top: 2px;
      text-align: center;
      background: rgba(255, 255, 255, 0.7);

      &:active {
        filter: brightness(0.7);
      }
    }
  }
</style>
