<!-- 首页 -->
<template>
    <el-container>
      <el-aside style="width:auto">
        <Sidebar/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
export default {
  data () {
    return {
    }
  },
  components:{
    Header,Sidebar
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>