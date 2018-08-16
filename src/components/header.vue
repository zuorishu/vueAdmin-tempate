<!-- 头部 -->
<template>
    <div class="header">
      <div class="left">
        <div class="nav_font">
          <span v-if="!$store.state.isCollapse" class="fa fa-truck fa-lg" @click="$store.commit('isCollapse')"></span>
          <span v-else class="fa fa-fighter-jet fa-lg" @click="$store.commit('isCollapse')"></span>
        </div>
        <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-if="selfName != '首页' && selfName != ''">{{blockName}}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="selfName != '首页' && selfName != ''">{{selfName}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="right">
        <div class="right_l">
        </div>
        <div class="right_r">
          <span class="userName">111</span>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="fa fa-sign-out fa-2x"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      blockName:'',
      selfName:'',
    }
  },
  created() {
    let that = this;
    if(sessionStorage.getItem('breadcrumb') != null){
        let breadcrumb = sessionStorage.getItem('breadcrumb');
        that.blockName = JSON.parse(breadcrumb).blockName;
        that.selfName = JSON.parse(breadcrumb).selfName;
    }
  },
  watch:{
    $route(to,form){
      let that = this;
      that.blockName = to.meta.blockName;
      that.selfName = to.name;
      sessionStorage.setItem('breadcrumb',JSON.stringify({blockName:that.blockName,selfName:that.selfName}))
    }
  },
  methods: {
    
    // 点击退出
    handleCommand(){
        this.$router.replace({ path: '/login'})
    }
  }
}

</script>
<style lang='scss' scoped>
</style>