<!-- 侧边栏 -->
<template>
    <el-menu 
        unique-opened
        :default-active="$route.path"
        :router=true
        class="el-menu-vertical-demo" 
        :collapse="$store.state.isCollapse"
        background-color="#314155"
        text-color="#fff"
        active-text-color="#409EFF">
        <el-submenu v-for="(item,index) in navData" :index="item.id+''" :key="index">
            <template slot="title">
                <i class="fa fa-lg" :class="item.iconCls"></i>
                <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item v-for="(i,ind) in item.children" :index="i.path" :key="ind">{{i.name}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
  data () {
    return {
        navData:[
            {id:1,name:'代理管理',path:'',iconCls:'fa-calendar-o',children:[
                {name:'会员列表',path:'/agentAdmin/vipList'},
                {name:'代理商列表',path:'/agentAdmin/agentList'}
            ]},
            {id:2,name:'用户管理',path:'',iconCls:'fa-user',children:[
                {name:'用户列表',path:'/userAdmin/userList'}
            ]},
            {id:3,name:'提币审核',path:'',iconCls:'fa-database',children:[
                {name:'提币审核',path:'/currencyReview'}
            ]},
            {id:4,name:'产品管理',path:'',iconCls:'fa-product-hunt',children:[
                {name:'产品列表',path:'/productAdmin/productList'}
            ]},
            {id:5,name:'字典表',path:'',iconCls:'fa-book',children:[
                {name:'字典表',path:'/dictionary'}
            ]},
            {id:6,name:'富文本',path:'',iconCls:'fa-book',children:[
                {name:'富文本',path:'/ueditor'}
            ]},
            {id:7,name:'i18n',path:'',iconCls:'fa-book',children:[
                {name:'i18n',path:'/i18n'}
            ]},
        ]
    }
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
    }
</style>