<template>
  <div class="w-all mapHeight flex fd-c">
    <div class="topbg pt20">
      <userinfo></userinfo>
    </div>
    <div class="flex-1 h-all w-all">
      <div id="container" ref="container" class="w-all h-all"></div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "lib/dateformat";
import { mapState } from "vuex";
export default {
  data() {
    return {
      value1: "",
      currData: ""
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
@car: 50 / @bs;
.mapHeight {
  height: calc(100vh - @car);
}
</style>
 