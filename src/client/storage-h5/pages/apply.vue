<template>
  <div class="w-all mb50">
    <div class="w-all flex ai-c jc-c">
      <div class="flex-line bc-fff wb-85 ra-25 rel b-d mt10">
        <input class="bc-t pp13 center fs-14 wb-100" placeholder="请输入设备名称" type="text">
        <span class="iconfont iconsousuo abs al30 abst fs-16"></span>
      </div>
    </div>
    <div class="flex mt10">
      <div class="flex fd-c">
        <span :class="{'isActive':item.select}" @click="btnList(item)" v-for="(item, index) in list" :key="index" class="h-48 flex ai-c w-93 pl15">{{item.title}}</span>
      </div>
      <div class="flex-1 pl10 pr10">
        <div v-for="(item, index) in listTwo" :key="index" class="w-all">
          <div class="mb10">{{item.title}}</div>
          <div v-for="(v, i) in item.children" :key="i" class="w-all bc-fff mb10 flex">
            <div class="pp10">
              <img class="w-70 h-70" :src="toPic(v.pic)" alt="">
            </div>
            <div class="flex flex-1 pt10 pb10 pr10 fd-c">
              <div class="w-all">{{v.title}}</div>
              <div class="w-all fc-aaa">{{v.about}}</div>
              <div class="flex jc-e">
                <span class="iconfont fs-18 fc-999 iconjian1"></span>
                <input class="w-15 h-15 fs-12 center mt1 b-c" value="1" type="text">
                <span class="iconfont fs-18 fc-999 iconjia"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed h-50 flex ab0 al0 pl10 pr10 jc-b w-all ai-c bc-fff">
      <div class="flex ai-c">
        <span class="iconfont icon44xuanze-2 mr10 fs-22 isFc"></span>
        <span>合计：</span>
        <span class="red">5件</span>
      </div>
      <div class="h-34 isActive w-110 ra-20 flex ai-c jc-c">提交申请</div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data(){
    return{
      list:[],
      listTwo:[]
    }
  },
  methods:{
    ...mapActions(['getzglist']),
    toPic(url){
      // console.log('tag', url)
      return require(`../assets/test/${url}`);
    },
    btnList(item){
      this.listTwo=item.children;
      this.list.forEach(v=>{v.select=false;});
      item.select=true;
    },
    initData(){
      this.getzglist().then(res=>{
        this.list=res.data;
        this.listTwo=this.list[0].children;
      })
    }
  },
  created(){
    this.initData();
  }
}
</script>
<style lang="less">
 
</style>