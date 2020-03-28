<template>
  <div class="w-all mapHeight flex fd-c">
    <div class="flex jc-c backbg ai-c pt20">
      <div>
        <img class="w-80 b-f h-80 ra-100" src="../assets/head.png" alt />
      </div>
      <div class="flex fd-c fc-fff ml20">
        <div class="fs-18">无情.海</div>
        <span class="fs-13 mt10">职务：记者</span>
        <span class="fs-13 mt10">部门：新闻中心</span>
      </div>
    </div>
    <div class="flex-1 h-all w-all">
      <div id="container" ref="container" class="w-all h-all"></div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "lib/dateformat";
export default {
  data() {
    return {
      value1: "",
      currData: "",
      menu: [
        { title: "设备申请", pic: require("../assets/menu-1.png") },
        { title: "智柜申请", pic: require("../assets/menu-2.png") },
        { title: "设备借用", pic: require("../assets/menu-3.png") },
        { title: "智柜借用", pic: require("../assets/menu-4.png") },
        { title: "设备维修", pic: require("../assets/menu-5.png") },
        { title: "保修查询", pic: require("../assets/menu-6.png") },
        { title: "", pic: "" },
        { title: "", pic: "" }
      ]
    };
  },
  methods: {},
  mounted() {
    this.$nextTick(res => {
      var map = new AMap.Map("container");
      map.setZoom(15);
      map.plugin(["AMap.Scale"], function() {
        var scale = new AMap.Scale({});
        map.addControl(scale);
      });

      map.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认：true
          convert: true,
          showMarker: true,
          panToLocation: true,
          timeout: 10000
        });

        geolocation.getCurrentPosition();
        map.addControl(geolocation);
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
        }

        function onError(data) {
          // 定位出错
        }
      });
    });
  },
  created() {
    this.currData = formatDate(new Date(), "YY.MM.DD");
  }
};
</script>

<style lang='less' scoped>
@car:50/@bs;
.mapHeight{
  height: calc(100vh - @car);
}

</style>
 