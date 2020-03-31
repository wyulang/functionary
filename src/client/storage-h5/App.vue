<template>
  <div :class="{'mb50':isFooter}" class="w-all bc-t">
    <router-view class="fs-16 bc-f2 hi-all"></router-view>
    <footer v-if="isFooter" class="fixed ab0 al0 jc-c w-all bc-fff flex h-50 ai-c">
      <div class="flex w-all jc-c fc-999 ai-c">
        <div @click="toMenu(1)" class="flex fd-c ai-c jc-c fs-12 mr80">
          <span :class="{'acitve':isFooter==1}" class="home-menu mb3"></span>
          <span :class="{'fc-active':isFooter==1}">智柜</span>
        </div>
        <div @click="toMenu(2)" class="flex fd-c ai-c jc-c fs-12">
          <span :class="{'acitve':isFooter==2}" class="home-car mb3"></span>
          <span :class="{'fc-active':isFooter==2}">车辆</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["isFooter"])
  },
  methods: {
    toMenu(type) {
      if (type == 1) {
        this.$router.push({ name: "index" });
      } else {
        this.$router.push({ name: "car" });
      }
    }
  },
  created() {

  }
};
</script>

<style lang='less'>
@import "~@css/app.less";
@import "~mint-ui/lib/style.min.css";
@import "~vue-loading-new/dist/vueLoadingNew.css";
body,
html {
  background-color: #f2f2f2;
  overflow: auto;
}
.backbg {
  min-height: 140 / @bs;
  background:#f2f2f2 url("./assets/bg.png") no-repeat;
  background-size: 100% auto;
}
.topbg {
  min-height: 110 / @bs;
  background: url("./assets/bg.png") no-repeat;
  background-size: 100% auto;
}
.isActive {
  background-color: #416fff;
  color: #fff;
}
.isFc {
  color: #416fff;
}
.fc-active {
  color: #416fff;
}
.home-menu {
  &.acitve {
    background: url("./assets/home-active.png") no-repeat !important;
    background-size: 100% !important;
  }
  background: url("./assets/home-back.png") no-repeat;
  width: 51/2 / @bs;
  height: 39/2 / @bs;
  background-size: 100% !important;
}
.home-car {
  &.acitve {
    background: url("./assets/car-active.png") no-repeat !important;
    background-size: 100% !important;
  }
  background: url("./assets/car-back.png") no-repeat;
  width: 51/2 / @bs;
  height: 39/2 / @bs;
  background-size: 100%;
}
</style>
