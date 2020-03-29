<template>
  <div class="flex jc-c ai-c">
    <div>
      <img class="w-80 b-f h-80 ra-100" :src="user.avatar" alt />
    </div>
    <div class="flex fd-c fc-fff ml20">
      <div class="fs-18">{{user.name}}</div>
      <span class="fs-13 mt10">职务：{{user.position}}</span>
      <span class="fs-13 mt10">部门：{{user.departmentNameList&&user.departmentNameList.toString()}}</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    let userinfo = this.storage("userinfo");
    if (userinfo) {
      this.user = userinfo;
    } else {
      this.$nextTick(res => {
        dd.runtime.permission.requestAuthCode({
          corpId: "dinge1d38f3c65939f9435c2f4657eb6378f",
          onSuccess: res => {
            this.getUerInfo({ code: res.code }).then(val => {
              this.user = val.data;
            });
          },
          onFail: function(err) {
            alert("出错了, " + err);
          }
        });
      });
    }
  },
  methods: {
    ...mapActions(["getUerInfo"])
  },
  created() {}
};
</script>