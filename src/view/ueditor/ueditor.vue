<!-- 富文本 -->
<template>
  <div id="app">
      <div>
        <button size="primary" type="info" icon="plus" @click="getContent">获取内容</button>
        <UEditor :defaultMsg=defaultMsg :config=config ref="ueditor"></UEditor>
      </div>
  </div>
</template>

<script>
  import UEditor from '@/components/ueditor/index.vue'

  export default{
      components: {UEditor},
      data(){
        return {
            editor: null,
            defaultMsg:'',
            config: {
                //可以在此处定义工具栏的内容
                // toolbars: [
                //  ['fullscreen', 'undo', 'redo','|','bold', 'italic', 'underline',
                //  '|','superscript','subscript','|', 'insertorderedlist', 'insertunorderedlist',
                //  '|','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify']
                // ],
                autoHeightEnabled: false,
                autoFloatEnabled: true,
                initialContent:'请输入内容',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
                autoClearinitialContent:false, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
                initialFrameWidth: null,
                initialFrameHeight: 450,
                BaseUrl: '',
                UEDITOR_HOME_URL: 'static/ueditor/'
            },
            addFormVisible: false
        }
      },
      methods: {
        //获取文档内容
        getContent(){
          let content = this.$refs.ueditor.getUEContent();
          console.log(content);
          alert(content);
        },
      }
  }

</script>

<style lang='scss' scoped>
</style>