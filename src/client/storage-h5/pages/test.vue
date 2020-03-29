<template>
  <div class="w-all wrap">
    {{userinfo}}
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data(){
    return {
      userinfo:{}
    }
  },
  methods:{
    ...mapActions(["getUerInfo"]),
  },
  created(){
    this.$nextTick(res => {
      dd.runtime.permission.requestAuthCode({
        corpId: "dinge1d38f3c65939f9435c2f4657eb6378f",
        onSuccess: (res)=> {
          this.getUerInfo({code:res.code}).then(val=>{
            this.userinfo=JSON.stringify(Object.assign({},{code:res.code},{request:val}));
          });
        },
        onFail: function(err) {
          alert("出错了, " + err);
        }
      });
    });
  }
}
</script>