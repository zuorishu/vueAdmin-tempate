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
                <span slot="title">{{$t(item.name)}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item v-for="(i,ind) in item.children" :index="i.path" :key="ind">{{$t(i.name)}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
  data () {
    return {
        navData:[
            {id:2,name:'nav.userAdmin',path:'',iconCls:'fa-user',children:[
                {name:'nav.userList',path:'/userAdmin/userList'}
            ]},
            {id:4,name:'nav.productAdmin',path:'',iconCls:'fa-product-hunt',children:[
                {name:'nav.productList',path:'/productAdmin/productList'}
            ]},
            {id:5,name:'nav.dictionary',path:'',iconCls:'fa-book',children:[
                {name:'nav.dictionary',path:'/dictionary'}
            ]},
            {id:6,name:'nav.ueditor',path:'',iconCls:'fa-edit',children:[
                {name:'nav.ueditor',path:'/ueditor'}
            ]},
            {id:7,name:'nav.i18n',path:'',iconCls:'fa-language',children:[
                {name:'nav.i18n',path:'/i18n'}
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