<template>
  <div class="w-all">
    <div class="flex ai-c jc-c pt15 pb15 w-all">
      <span class="h-0 bb-d w-100 mr10"></span>
      <span class="isFc">被借人信息</span>
      <span class="h-0 bb-d w-100 ml10"></span>
    </div>

    <div class="flex jc-c head ml10 mr10 ai-c pp10 ra-7">
      <div>
        <img class="w-80 b-f h-80 ra-100" src="../assets/head.png" alt />
      </div>
      <div class="flex fd-c fc-fff ml20">
        <div class="fs-18">无情.海</div>
        <span class="fs-13 mt10">职务：记者</span>
        <span class="fs-13 mt10">部门：新闻中心</span>
      </div>
    </div>

    <div class="w-all flex ai-c jc-c">
      <div class="flex-line bc-fff ml10 mr10 w-all ra-25 rel b-d mt10">
        <input class="bc-t pp13 center fs-14 wb-100" placeholder="搜索被借人姓名" type="text" />
        <span class="iconfont iconsousuo abs al30 abst fs-16"></span>
      </div>
    </div>

    <div class="w-all flex ai-c jc-c">
      <div class="flex-line bc-fff ml10 mr10 w-all ra-25 rel b-d mt10">
        <input class="bc-t pp13 center fs-14 wb-100" placeholder="搜索需要抄送人姓名" type="text" />
        <span class="iconfont iconsousuo abs al30 abst fs-16"></span>
      </div>
    </div>

    <div class="pp10 fb mt5 mb5 fs-15 fc-0">借用物品选择</div>

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

    <div class="pl10 pr10 h-40 bc-fff mt20 flex ai-c">
      <span>选择归还时间</span>
      <span class="flex-1 right">{{new Date()|date}}</span>
      <span class="iconfont icon1201youjiantou fc-999 ml10"></span>
    </div>
    <div class="pl10 pr10 h-40 bc-fff mt10 flex ai-c">
      <span>备注信息</span>
      <input placeholder="请填写备注信息" class="flex-1 fs-14 pp5 bc-t">
      <span class="iconfont icon1201youjiantou fc-999 ml10"></span>
    </div>

    <div class="isActive h-50 w-all ai-c jc-c flex mt20">提交申请</div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      list: []
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
.head {
  background-color: #2da7fe;
}
</style>