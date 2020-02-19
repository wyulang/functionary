<template>
  <div class="flex fd-c h-all w-all">
    <div class="w-all bc-fff ra-4 pr10 pb10 sha-7">
      <div class="flex w-all">
        <div class="flex-1">
          <div class="pt10 flex pb10">
            <el-button @click="btnNewClick()" icon="iconfont icontianjia" size="small">新增</el-button>
            <el-button @click="isParment=true;" icon="iconfont icondaoruexcel pr5 fs-14" size="small">设备导入</el-button>
            <!-- <el-button class="ml10" @click="btnDelete(selectList)" icon="iconfont iconshanchu" size="small">批量删除</el-button> -->
          </div>
          <div class="sha-3 mt5">
            <table class="table w-all">
              <thead>
                <tr>
                  <td class="wb-1">
                    <el-checkbox :value="selectList.length==list.length&&selectList.length>0" @change="v=>{v?(selectList=list.map(d=>{return d.id})):(selectList=[])}"></el-checkbox>
                  </td>
                  <td>昵称</td>
                  <td>用户名</td>
                  <td>注册时间</td>
                  <td>上次登录时间</td>
                  <td>上次登录IP</td>
                  <td>登录次数</td>
                  <td>上传次数</td>
                  <td>操作</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list" :key="index">
                  <td class="w-10">
                    <el-checkbox></el-checkbox>
                  </td>
                  <td>{{item.loginName}}</td>
                  <td>{{item.username}}</td>
                  <td>{{item.createDate}}</td>
                  <td>{{item.lastLoginTime||'-'}}</td>
                  <td>{{item.lastLoginIp||'-'}}</td>
                  <td>{{item.loginNum}}次</td>
                  <td>{{item.uploadNum}}次</td>
                  <td>
                    <span @click="deleteItem(item)" class="hand mr10">删除</span>
                    <span @click="getItem(item)" class="hand">编辑</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex jc-e mt15 mb5">
            <el-pagination hide-on-single-page="true" class="fr" @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page="query.pageNum" :page-size="query.pageSize" background layout="total,sizes,prev, pager, next" :page-sizes="[10, 20]" :total="query.total"></el-pagination>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import api from "../store/webapi.js";
export default {
  data() {
    return {
      list:[],
      selectList:[],
      query:{
        pageNum:0,
        pageSize:10
      }
    };
  },
  methods: {
    
    deleteItem(item) {
      this.isConfirm = true;
      this.deleteId = item.id;
    },
    btnDelete() {
      api
        .get("sys/deleteUser", { id: this.deleteId })
        .then(res => {
          if (res.code == 2000) {
            this.$message.success("删除成功！");
            this.isConfirm = false;
            this.initData();
          } else {
            this.$message.error(res.magenta);
          }
        });
    },
    btnAdd() {
      if (!this.user.loginName.length) {
        this.$message.error("请输入昵称");
        return;
      }
      if (!this.user.password || this.user.password.length < 5) {
        this.$message.error("请输入密码，且长度至少为6位");
        return;
      }
      if (!this.user.username.length || this.user.username.length < 2) {
        this.$message.error("请输入登录名，且长度至少为3位");
        return;
      }
      this.user.role = "1";
      if (!this.user.id) {
        api.post("sys/addUser", this.user).then(res => {
          if (res.code == 2000) {
            this.$message.success("新增成功！");
            this.isModel = false;
            this.initData();
          } else {
            this.$message.warning(res.message);
          }
        });
      } else {
        api.post("sys/editUser", this.user).then(res => {
          if (res.code == 2000) {
            this.$message.success("修改成功！");
            this.isModel = false;
            this.initData();
          }
        });
      }
    },
    getItem(item) {
      this.user.username = item.username;
      this.user.loginName = item.loginName;
      this.user.password = item.password;
      this.user.id = item.id;
      this.user.departmentId = item.departmentId;
      this.user.departmentName = item.departmentName;
      this.user.role = "1";
      this.isModel = true;
      this.isReadonly = true;
    },
    handleSizeChange(val) {
      this.query.pageSize = val;
      // console.log(`每页 ${val} 条`);
      this.handleCurrentChange(1);
    },
    handleCurrentChange(val) {
      this.query.pageNum = val;
      this.initData();
    },
    handleCommand(type, data) {
      if (type == 1) {
        this.isAddNode = true;
        this.depart.parentId = data.id;
        this.nodeData = data;
      } else if (type == 2) {
        this.isAddNode = true;
        this.depart.id = data.id;
        this.depart.name = data.name;
        this.depart.shortName = data.shortName;
        this.nodeData = data;
      } else if (type == 3) {
        api.get("sys/deleteDepart", { id: data.id }).then(res => {
          if (res.code == 2000) {
            this.$message.success("部门删除成功！");
            // const parent = node.parent;
            // const children = parent.data.children || parent.data;
            // const index = children.findIndex(d => d.id === data.id);
            // children.splice(index, 1);
              this.initData();
          }else {
              this.$message.error(res.message);
          }
        });
      }
    },
    btnNewClick() {
      this.isModel = true;
      // this.user={};
      this.user.username = "";
      this.user.loginName = "";
      this.user.password = "";
      this.user.id = 0;
      this.isReadonly = false;
    }
  },
  created() {
   
  }
};
</script>

<style lang="less">
.tree-nodes {
  display: flex;
  i {
    display: none;
  }
  &:hover {
    i {
      display: block;
      color: #587ed1;
    }
  }
}
.bc .uploads {
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  .body-flies {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
  }
  .flexupload {
    &:hover {
      background-color: transparent;
    }
  }
  .filebox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
  }
  .filelist {
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    .item-list {
      border: 1px solid #f1f1f1;
      padding: 10px;
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 15%;
      max-width: 15%;
      min-width: 15%;
      margin-right: 16px;
      margin-bottom: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
}
</style>




