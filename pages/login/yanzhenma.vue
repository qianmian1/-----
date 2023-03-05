<template>
  <view class="t-login">
    <!-- 页面装饰图片 -->
    <image class="img-a" src="@/static/images/2.png"></image>
    <image class="img-b" src="@/static/images/3.png"></image>
    <!-- 标题 -->
    <view class="t-b">{{ title }}</view>
    <form class="cl">
      <view class="t-a">
        <image src="@/static/images/yz.png"></image>
        <input type="number" name="code" maxlength="6" placeholder="请输入验证码" v-model="code" />
        <view v-if="showText" class="t-c" @tap="getCode">{{hi}}</view>
        <view v-else class="t-c" style="background-color: #A7A7A7;">重新发送({{ second }})</view>
      </view>
      <button @tap="testValidate">验证</button>
    </form>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        title: '验证码', //填写logo或者app名称，也可以用：欢迎回来，看您需求
        second: 60, //默认60秒
        hi: '发送验证码',
        showText: true, //判断短信是否发送
        code: '', //验证码
        codeId: '',
        statusJson: {
          '-5': '验证失败',
          '-4': '验证码已使用',
          '-3': '验证码已失效',
          '-2': '当前邮箱未发送验证码',
          '-1': '还未发送验证码',
          '0': '验证码不正确',
          '1': '验证成功'
        }
      };
    },
    onLoad(option) {
      this.getCode(getApp().globalData.username)
    },
    methods: {
      testSend(username) {
        uni.showLoading({
          mask: true
        })
        uniCloud.callFunction({
          name: "emailCode",
          data: {
            method: 'sendCode',
            email: username,
          }
        }).then((res) => {
          uni.hideLoading();
          if (res.result.status) {
            this.codeId = res.result.id;
            uni.showToast({
              duration: 1500,
              icon: 'none',
              title: '发送成功',
              mask: true
            })
          } else {
            uni.showToast({
              duration: 1500,
              title: '发送失败',
              mask: true,
              icon: 'none'
            })
          }
        }).catch(e => {
          uni.hideLoading()
          uni.showToast({
            title: '发送失败请重试',
            icon: 'error'
          })
        });
      },
      //当前登录按钮操作
      testValidate() {
        if (!this.code) {
          uni.showToast({
            duration: 1500,
            title: '请输入验证码',
            mask: true,
            icon: 'none'
          })
          return;
        }
        uni.showLoading({
          mask: true
        })
        uniCloud.callFunction({
          name: "emailCode",
          data: {
            code: this.code,
            method: 'validateCode',
            email: getApp().globalData.username,
            codeId: this.codeId,
            effectiveTime: 300
          }
        }).then((res) => {
          uni.hideLoading();
          switch (res.result.status) {
            case 1:
              uni.showToast({
                duration: 1500,
                title: '验证成功',
                mask: true,
                icon: 'none'
              })
              getApp().globalData.code = true
              uni.redirectTo({
                url: '/pages/login/zhuce/zhuce'
              })
              break
            case 0:
              uni.showToast({
                duration: 1500,
                title: '验证失败，请检查验证码',
                mask: true,
                icon: 'none'
              })
              break
            case -3:
              uni.showToast({
                duration: 1500,
                title: '验证码已失效',
                mask: true,
                icon: 'none'
              })
              break
            case -4:
              uni.showToast({
                duration: 1500,
                title: '验证码已使用',
                mask: true,
                icon: 'none'
              })
          }
        }).catch(e => {
          uni.hideLoading()
          uni.showToast({
            title: '发送失败',
            icon: 'error'
          })
        })
      },
      //获取短信验证码
      getCode(username) {
        let that = this;
        that.testSend(username)
        let interval = setInterval(() => {
          that.showText = false;
          let times = that.second - 1;
          that.second = times;
        }, 1000);
        setTimeout(() => {
          clearInterval(interval);
          that.hi = '重新发送'
          that.second = 60;
          that.showText = true;
        }, 60000);
      },
    }
  };
</script>
<style>
  @import url('smsCodeLogin.css');
</style>
