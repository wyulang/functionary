<template>
  <div class="w-all">
    <div class="pp10 fb mt5 mb5 fs-15 fc-0">选择需求查询的设备</div>
    <div class="flex pp10 ha-300 auto jc-b fw">
      <div v-for="(item, index) in list" :key="index" class="wb-24 flex mb10 fd-c">
        <div class="pp5 w-all rel ra-5">
          <img class="w-all ra-5 h-70" :src="require('../assets/test/'+item.pic)" alt />
          <div @click="item.select=!item.select" class="abs at8 ar8">
            <span v-if="!item.select" class="iconfont fs-20 iconxuanze"></span>
            <span v-else class="iconfont iconxianshi_xuanzetianchong fs-20 isFc"></span>
          </div>
        </div>
        <span class="h-20 lh-20 center hidden">{{item.title}}</span>
      </div>
    </div>
    <div class="pp10 mt10">选择需求查询的设备</div>
    <div class="pl10 pr10 h-40 bc-fff flex ai-c">
      <span>期望维修好时间</span>
      <span class="flex-1 right">{{new Date()|date('YYYY-MM-DD hh:mm:ss')}}</span>
      <span class="iconfont icon1201youjiantou fc-999 ml10"></span>
    </div>

    <div class="pp10">
      <div class="bc-e pp10">
        保修相关条例描述，保修相关条例描述，保修相关条例描述，保修相关条例描述，保修相关条例描述，保修相关条例描述，保修相关条例描述，
      </div>
    </div>

  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    ...mapActions(["getzglist"]),
    initData() {
      this.getzglist().then(res => {
        res.data.forEach(v => {
          v.children.forEach(item => {
            item.children.forEach(chid => {
              this.list.push({
                ...chid,
                select: false
              });
            });
          });
        });
      });
    }
  },
  created() {
    this.initData();
  }
};
</script>
<style lang="less">
body{
  background: #fff !important;
}
.head {
  background-color: #2da7fe;
}
</style>