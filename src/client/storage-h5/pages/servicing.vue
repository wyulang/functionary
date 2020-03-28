<template>
  <div class="w-all">
    <div class="pp10 fb mt5 mb5 fs-15 fc-0">我的报销物品选择</div>
    <div class="flex pp10 ha-400 auto jc-b fw">
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

    <div class="w-all mt15 pp10">故障描述</div>

    <div class="w-all pp10">
      <div :class="{'isFc':item.select}" @click="item.select=!item.select" v-for="(item, index) in gzList" :key="index" class="flex-line ra-20 pp10">{{item.title}}</div>
    </div>

    <div class="pl10 pr10 h-40 bc-fff flex ai-c">
      <span>期望维修好时间</span>
      <span class="flex-1 right">{{new Date()|date}}</span>
      <span class="iconfont icon1201youjiantou fc-999 ml10"></span>
    </div>
    <div class="pl10 pr10 h-40 bc-fff mt10 flex jc-b ai-c">
      <span>添加故障照片</span>
      <span class="iconfont icon1201youjiantou fc-999 ml10"></span>
    </div>
    <div class="pl10 pr10 h-40 bc-fff mt10 flex ai-c">
      <span>备注信息</span>
      <input placeholder="请填写备注信息" class="flex-1 fs-14 pp5 bc-t">
      <span class="iconfont icon1201youjiantou fc-999 ml10"></span>
    </div>

    <div class="isActive h-50 w-all ai-c jc-c flex mt20">提交维修单</div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      list: [],
      gzList:[
        {title:'电池不供电',select:false,value:1},
        {title:'镜头损坏',select:false,value:2},
        {title:'机体损坏',select:false,value:3},
        {title:'泡水',select:false,value:4},
        {title:'架子折断',select:false,value:5},
        {title:'底座脱落',select:false,value:6},
        {title:'掉泥坑',select:false,value:7},
        {title:'掉泥坑',select:false,value:8},
        {title:'掉泥坑',select:false,value:9},
        {title:'掉泥坑',select:false,value:10},
        {title:'底座脱落',select:false,value:11},
        {title:'掉泥坑',select:false,value:12},
        {title:'架子折断',select:false,value:13},
        {title:'底座脱落',select:false,value:14},
      ]
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