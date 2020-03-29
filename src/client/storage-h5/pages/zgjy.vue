<template>
  <div class="w-all">
    <div class="topbg pt20">
      <userinfo></userinfo>
    </div>

    <div class="flex w-all bc-fff pt20 pb20 jc-c">
      <img class="w-300 h-300" src="../assets/zg.png" alt="">
    </div>

    <div class="w-all flex ai-c jc-c">
      <div class="flex-line bc-fff ml10 mr10 w-all ra-25 rel b-d mt10">
        <input class="bc-t pp13 center fs-14 wb-100" placeholder="搜索被借人姓名" type="text" />
        <span class="iconfont iconsousuo abs al30 abst fs-16"></span>
      </div>
    </div>

    <div class="pl10 pr10 h-40 bc-fff mt10 flex ai-c">
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
