<template>
  <div class="w-all mapHeight backbg">
    <div class=" pt20">
     <userinfo></userinfo>
    </div>
    <div class="bc-fff ra-5 pl15 pr15 pt20 mt10 ml10 mr10">
      <div class="w-all flex jc-b fw">
        <div
          @click="$router.push({name:item.url})"
          v-for="(item, index) in menu"
          :key="index"
          class="wb-22 ai-c flex fd-c mb20"
        >
          <img v-if="item.pic" class="w-40 h-40 mb5" :src="item.pic" alt />
          <span class="fs-13">{{item.title}}</span>
        </div>
      </div>
    </div>

    <div class="w-all pt20 bc-f2 jc-c pb20 flex ai-c">
      <div :class="{'gray':!isOpen}" class="ra-100 w-160 fc-fff h-160 opens flex fd-c ai-c jc-c">
        <span class="fb">一键开柜</span>
        <span class="fs-12 pt6">{{currData}}</span>
      </div>
    </div>
    <div class="w-all fixed ab60 al0 w-all flex h-30 bc-t bc-f2 jc-c ai-c">
      <img class="w-16 h-16" src="../assets/tip.png" alt />
      <span class="fs-12 ml5 fc-999">未申领智柜，暂时无法打开，请先申请智柜</span>
    </div>
    <div class="fixed ar5 ab100">
      <img class="w-37 h-37" src="../assets/tel.png" alt />
    </div>
  </div>
</template>

<script>
import { formatDate } from "lib/dateformat";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      value1: "",
      isOpen: false,
      currData: "",
      menu: [
        {
          title: "设备申请",
          pic: require("../assets/menu-1.png"),
          url: "appliy"
        },
        {
          title: "智柜申请",
          pic: require("../assets/menu-2.png"),
          url: "zgsq"
        },
        {
          title: "设备借用",
          pic: require("../assets/menu-3.png"),
          url: "borrow"
        },
        {
          title: "智柜借用",
          pic: require("../assets/menu-4.png"),
          url: "zgjy"
        },
        {
          title: "设备维修",
          pic: require("../assets/menu-5.png"),
          url: "servicing"
        },
        {
          title: "保修查询",
          pic: require("../assets/menu-6.png"),
          url: "inquiry"
        },
        { title: "", pic: "" ,url:'test'},
        { title: "", pic: "" ,url:'test'}
      ]
    };
  },
  methods: {

  },
  created() {
    this.currData = formatDate(new Date(), "YY.MM.DD");
  }
};
</script>

<style lang='less' scoped>
@car: 50 / @bs;
.mapHeight {
  height: calc(100vh - @car);
}
.backbg {
  background: url("../assets/bg.png") no-repeat;
  background-size: 100% auto;
}
.opens {
  background: url("../assets/open.png") no-repeat;
  background-size: 100% auto;
}
.gray {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
</style>
