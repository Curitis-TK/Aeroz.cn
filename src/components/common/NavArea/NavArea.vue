<template>
  <div class="NavArea container animated zoomIn">
    <el-row :gutter="20" v-show="show">
        <nav-area-item v-for="(item ,index ) in NavList" :key="index" :itemList="item"/>
    </el-row>
  </div>
</template>

<script>
  import NavAreaItem from "./NavAreaItem";

  export default {
    name: "NavArea",
    components: {
      NavAreaItem
    },
    data(){
      return {
        NavList : {
          skin:{
            title: "AeroZ 皮肤站",
            linkType : 0,
            link : "https://skin.aeroz.cn/",
            bg : "https://image.aeroz.cn/images/2020/01/14/skin.jpg",
            msg : ["通过皮肤站","管理您的账户","设定您的游戏皮肤"],
            disabled : false,
          },
          image:{
            title: "AeroZ 图床",
            linkType : 0,
            link : "https://image.aeroz.cn/",
            bg : "https://image.aeroz.cn/images/2020/01/14/image.jpg",
            msg : ["通过图床站","上传您心爱的照片","并放入MineCraft中"],
            disabled : false,
          },
          shorten:{
            title: "AeroZ 短链接",
            linkType : 0,
            link : "https://s.aeroz.cn/",
            bg : "https://image.aeroz.cn/images/2020/01/14/image.jpg",
            msg : ["缩短您的链接"],
            disabled : false,
          },
          aero:{
            title: "Minecraft 多人游戏",
            linkType : 1,
            link : "/aero",
            bg : "https://image.aeroz.cn/images/2020/01/14/aeroc.jpg",
            msg : ["玩家体验永远放在第一位",">> 了解更多 <<","在做了（咕咕咕）"],
            disabled : false,
          },
          mcbar:{
            title: "mcbar 论坛",
            linkType : 0,
            link : "https://mcbar.club/",
            bg : "https://image.aeroz.cn/images/2020/01/14/mcbar.jpg",
            msg : ["一个Minecraft论坛"],
            disabled : false,
          },
          test1:{
            title: "路由测试",
            linkType : 1,
            link : "/test",
            bg : "https://image.aeroz.cn/images/2020/01/14/image.jpg",
            msg : ["测试文字","测试文字"],
            disabled : false,
          },
          empty:{
            title: "空内容",
            linkType : 1,
            link : "/empty",
            bg : "https://image.aeroz.cn/images/2020/01/14/image.jpg",
            msg : ["测试文字"],
            disabled : false,
          },
          disable:{
            title: "禁用内容",
            linkType : 1,
            link : "/disable",
            bg : "https://image.aeroz.cn/images/2020/01/14/image.jpg",
            msg : ["禁用测试"],
            disabled : true,
          },
        },
        show : false,
      }
    },
    created() {
      setTimeout(()=>{
        this.show = true
      },100)
    }
  }
</script>

<style scoped>
  .NavArea{
    text-align: center;
  }
</style>
