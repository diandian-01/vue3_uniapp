<template>
  <view class="container">
    <view class="home_each" v-for="item in homeList" :key="item.id" @click="homeEachHandle(item.id)">
      <image :src="item.img" mode="scaleToFill"/>
      <text>{{ item.title }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue";
import { onShow } from "@dcloudio/uni-app";
import { useUserStore } from "@/store";

const userStore = useUserStore();

onShow(() => {
  console.log("||---home页----||");
});

const homeList = ref([
  {id: 1, title: "入库管理", img: "/static/nutritionalRecord.png"},
  {id: 2, title: "采集关联", img: "/static/nutritionalRecord.png"},
  {id: 3, title: "出库管理", img: "/static/nutritionalRecord.png"},
  {id: 4, title: "退货管理", img: "/static/nutritionalRecord.png"},
  {id: 5, title: "库存统计", img: "/static/nutritionalRecord.png"},
  {id: 6, title: "扫码溯源", img: "/static/nutritionalRecord.png"},
  {id: 7, title: "设置", img: "/static/nutritionalRecord.png"},
])

const homeEachHandle = (id) => {
  const pageMap = {
    1: '/pages/stockInManagement/stockInManagement',   //入库管理
    2: '/pages/dataCollectionAssociation/dataCollectionAssociation',  //采集关联
    3: '/pages/stockOutManagement/stockOutManagement',  //出库管理
    4: '/pages/returnManagement/returnManagement',   //退货管理
    5: '/pages/inventoryStatistics/inventoryStatistics',   //库存统计
    6: '/pages/scanTraceability/scanTraceability',   //扫码溯源
    7: '/pages/settings/settings'   //设置
  };
  if (pageMap[id]) {
    uni.navigateTo({ url: pageMap[id] });
  }
};

</script>

<style lang="scss">
.container {
  padding: 100rpx;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .home_each {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80rpx;
    
    image {
      width: 140rpx;
      height: 140rpx;
    }

    text {
      padding-top: 20rpx;
      font-size: 28rpx;
    }
  }
}
</style>
