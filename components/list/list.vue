<template>
  <view>
    <view class="box">
      <!-- <view class="box-1">
        <scroll-view scroll-x="true" class="tab-list">
          <view class="tab-scroll_box">
            <view v-for="(item,index) in list.a " :key="index" class="tab-scroll_item" :class="{as:as===index}"
              @tap="taptab(index)">
              {{item.vlue}}
            </view>
          </view>
        </scroll-view>
      </view> -->
      <list-tab :list='list.a' :as='as' @taptab='taptab'></list-tab>
      <!-- -------------------------------- -->
      <view class="my-content" v-show="show===0?true:false">
        <view class="my-comtent_list" @tap="Sw">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>{{text}}</text>
          </view>
          <text>{{text_t}}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <!--     <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons> -->
            <text>{{text_1}}</text>
          </view>
          <uni-number-box :max="99999" :min="1" v-model="vModelValue"></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
      </view>
      <!-- ----------------------------------------------- -->
      <view class="my-content" v-show="show===1?true:false">
        <view class="my-comtent_list" @tap="Sw">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>{{text}}</text>
          </view>
          <text>{{text_t}}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>等级</text>
          </view>
          <uni-number-box></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>数量</text>
          </view>
          <uni-number-box></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>主词条</text>
          </view>
          <text>{{text_t}}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>副词条1</text>
          </view>
          <text>{{text_t}}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>数量</text>
          </view>
          <uni-number-box></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>副词条2</text>
          </view>
          <text>{{text_t}}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>数量</text>
          </view>
          <uni-number-box></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>副词条3</text>
          </view>
          <text>{{text_t}}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>数量</text>
          </view>
          <uni-number-box></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>副词条4</text>
          </view>
          <text>{{text_t}}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>数量</text>
          </view>
          <uni-number-box></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
      </view>
      <!-- ------------------------------------------------------------------------------- -->
      <view class="my-content" v-show="show===2?true:false">
        <view class="my-comtent_list" @tap="Sw">
          <view class="my-comtent_list-title">
            <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons>
            <text>{{text}}</text>
          </view>
          <text>{{text_t}}</text>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <!--     <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons> -->
            <text>等级</text>
          </view>
          <uni-number-box :min="1" v-model="vModelValue"></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <!--     <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons> -->
            <text>数量</text>
          </view>
          <uni-number-box :min="1" v-model="vModeV"></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
        <view class="my-comtent_list">
          <view class="my-comtent_list-title">
            <!--     <uni-icons custom-prefix="iconfont" type="icon-xinghao" size="10" color="red"></uni-icons> -->
            <text>精炼</text>
          </view>
          <uni-number-box :max="99999" :min="1" v-model="vMode"></uni-number-box>
          <uni-icons type="arrowright" size="16" color="#666"></uni-icons>
        </view>
      </view>
      <view class="box-4"></view>
    </view>
    <view class="btn-box">
      <button class="btn" @click="CarryOut">11122</button>
    </view>
  </view>
</template>

<script setup>
  import {
    ref,
    reactive
  } from "vue"
  // import {
  //   onLoad
  // } from '@dcloudio/uni-app';
  name: "list"
  let text = ref('物品')
  let text_t = ref('原石')
  let value = ref('201')
  let show = ref(0)
  let vModeV = ref(1)
  let vMode = ref(1)
  let vModelValue = ref(1)
  let text_1 = ref('数量')
  let list = reactive({
    a: [{
        value: '获取材料',
      },
      {
        value: '获取圣遗物',
      },
      {
        value: '获取角色',
      },
      {
        value: '获取武器',
      },
      {
        value: '获取全部',
      },
      {
        value: '获取所有武器',
      },
      {
        value: '获取所有材料',
      },
      {
        value: '获取所有角色',
      },
      {
        value: '获取角色命星',
      }
    ]
  })
  let as = ref(0)
  const taptab = (index) => {
    as.value = index
    if (index === 0 || index === 2 || index === 7 || index === 8 || index === 6) {
      show.value = 0
      switch (index) {
        case 0:
          text_1.value = '数量'
          text_t.value = '原石'
          text.value = '物品'
          value.value = '201'
          break
        case 2:
          text_1.value = '等级'
          text.value = '角色'
          text_t.value = '凯特'
          value.value = '10000001'
          break
        case 6:
          text_1.value = '数量'
          text.value = '材料'
          text_t.value = 'mats'
          value.value = 'mats'
          break
        case 7:
          text_1.value = '等级'
          text.value = '角色'
          text_t.value = 'avatrs'
          value.value = 'avatrs'
          break
        case 8:
          text.value = '命星'
          text_t.value = '神里绫华的命星'
          value.value = '1102'
          break
      }
    } else if (index === 1) {
      text.value = '圣遗物'
      text_t.value = '初学者之羽'
      value.value = '20002'
      show.value = 1
    } else if (index >= 3 && index < 6) {
      show.value = 2
      switch (index) {
        case 4:
          text.value = '获取全部'
          text_t.value = 'all'
          value.value = 'all'
          break
        case 5:
          text.value = '武器'
          text_t.value = 'weapons'
          value.value = 'weapons'
          break
        case 3:
          text.value = '获取武器'
          text_t.value = '无锋剑'
          value.value = '11101'
      }
    }
  }

  function CarryOut() {
    let UID = '@' + '<' + getApp().globalData.UID + '>'
    let date = null
    if (as.value === 0 || as.value === 8 || as.value === 6) {
      date = 'give' + ' ' + value.value + ' ' + 'x' + vModelValue.value.toString() + ' ' + UID
    } else if (as.value === 2 || as.value === 7) {
      date = 'give' + ' ' + value.value + ' ' + 'lv' + vModelValue.value.toString() + ' ' + UID
    } else if (as.value === 3) {
      date = 'give' + ' ' + value.value + ' ' + 'lv' + vModelValue.value.toString() + ' ' + 'x' + vModeV.value
        .toString() +
        ' ' + 'r' + vMode.value.toString() + ' ' + UID
    }
    uni.request({
      url: 'https://' + getApp().globalData.ServiceIp + '/opencommand/api',
      method: "POST",
      data: {
        action: 'command',
        token: getApp().globalData.Plugins,
        data: date
      }
    }).then(res => {
      uni.showToast({
        title: res.data.data,
        icon: 'none'
      })
    })
  }

  function Sw() {
    uni.navigateTo({
      url: '/pages/index/index-tab?id=' + as.value
    })
  }
  uni.$on('update', function(data) {
    text_t.value = data.text
    value.value = data.value
  })
</script>

<style lang="scss">
  .box {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 20px;
    background-color: #ffffff;

    .box-1 {
      display: flex;
      width: 100%;
      height: 40px;
      flex-direction: row;
      background-color: #ffffff;
      border-radius: 20px;

      .tab-list {
        flex: 1;
        overflow: hidden;
        box-sizing: border-box;

        .tab-scroll_box {
          display: flex;
          height: 40px;
          align-self: center;
          align-items: center;
          flex-wrap: nowrap;
          box-sizing: border-box;

          .tab-scroll_item {
            flex-shrink: 0;
            padding: 0 10px;
            cocor: #333;

            &.as {
              color: red;
            }
          }
        }
      }
    }

    .my-content {
      .my-comtent_list {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        margin-bottom: 10px;
        background-color: #ffffff;
        color: #333;
        font-size: 14px;

        .my-comtent_list-title {
          display: flex;
          align-items: center;

          .icons {
            margin-right: 5px;
          }
        }
      }
    }

    .box-4 {
      flex: 1;
    }
  }

  .btn-box {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: flex-end;

    .btn {
      background-color: skyblue;
      width: 200px;
      font-size: 14px;
      margin-top: 10px;
      font-family: 微软雅黑;
    }
  }
</style>
