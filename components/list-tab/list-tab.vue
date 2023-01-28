<template>
  <view class="box-1">
    <scroll-view scroll-x="true" class="tab-list">
      <view class="tab-scroll_box">
        <view v-for="(item,index) in list " :key="index" class="tab-scroll_item" :class="{as:as===index}"
          @click="taptablist(index)">
          {{item.value}}
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
  import {
    ref,
    reactive,
    watch,
  } from "vue";
  name: 'list-tab'
  const props = defineProps({
    as: {
      type: Number,
      required: true,
      default: 0
    },
    list: {
      type: Array,
      required: true,
      default (props) {
        return []
      }
    }
  })
  let em = defineEmits(['taptab'])
  const taptablist = (index) => {
    em('taptab', index)
  }
</script>

<style scoped lang="scss">
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
</style>
