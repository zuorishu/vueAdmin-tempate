<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" label-width="0px" class="ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" auto-complete="new-password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm()"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()" v-if="!loginLoading">登录</el-button>
                    <el-button type="primary" :loading='true' v-else>正在登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
              loginLoading:false,
              ruleForm: {
                  username: '',
                  password: ''
              }
            }
        },
        methods: {
          submitForm() {
            let that = this;
            if(that.ruleForm.username != '' && that.ruleForm.password != ''){
              // that.loginLoading = true;
              this.$router.push('/home');
            }else{
              that.$message.error('登录名或密码不可为空！')
            }
          }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background: #324157;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:400px;
        /* height:160px; */
        margin:-160px 0 0 -200px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>