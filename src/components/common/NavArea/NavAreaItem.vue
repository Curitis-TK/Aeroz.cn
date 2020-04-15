<template>
  <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6" class="NavArea-col">
    <div class="NavArea-item" :class="{itemDisabled : itemData.disabled}" @click="itemClick">
      <img class="item-bg" :src="itemData.bg" :alt="itemData.title">
      <div class="item-content">
        <p class="item-title">{{itemData.title}}</p>
        <div class="item-info">
          <ul>
            <li v-for="(item ,index) in itemData.msg" :key="index">
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: "NavAreaItem",
    props: {
      itemList: {
        type : Object,
        default(){
          return {
            title: "",
            linkType : 0,
            link : "",
            bg : "",
            msg : [""],
            disabled : true,
          }
        }
      }
    },
    data(){
      return {
        itemData : {},
      }
    },
    mounted() {
      this.itemData = this.itemList
    },
    methods: {
      itemClick(){
        if(this.itemData.disabled === false){
          switch (this.itemData.linkType) {
            case 0:
              window.location.href = this.itemData.link
              break
            case 1:
              if (this.$route.name !== this.link) {
                this.$router.push(this.itemData.link)
              } else {
                console.log('%c 原地踏步 ','background:#52c41a ; padding: 1px; border-radius: 3px;  color: #fff');
              }
              break
          }
        }else{
          console.log("disabled");
        }

      }
    },
  }
</script>

<style lang="less" scoped>
  .NavArea-item {
    user-select: none;

    position: relative;
    height: 220px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: gray;
    color: #fff;
    font-family: "Arial","微软雅黑",serif;
    overflow: hidden;
    text-align: center;
    z-index: 1;
    box-shadow: 0 0 5px #3c3c3c;
    transition: .5s;
    .item-bg{
      width: auto;
      transition: .5s;
      height: 120%;
      margin: 0 -100%;
      transform-origin: 50% 50%;
      @media (max-width: 992px){
        width: 150%;
        height: auto;
      }
    }
    .item-content{
      transition: .5s;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 80%;
      background-color: rgba(0,0,0,.4);
      .item-title{
        line-height: 47px;
        font-size: 18px;
        margin: 0;
        transition: .5s;
      }
      .item-info{
        height: 40%;
        vertical-align: middle;
        ul{
          height: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction:column;
          justify-content:center;
          li{
            vertical-align: middle;
            p{
              margin: 10px 0;
            }
          }
        }
      }
    }

    /*HOVER*/
    &:hover{
      transition: .5s;
      cursor: pointer;
      box-shadow: 0 0 5px deepskyblue;
      transform: scale(1.05);
      .item-bg{
        transform: rotate(-10deg) scale(1.5);
      }
      .item-content{
        top: 0;
        background-color: rgba(0,0,0,.7);
        .item-title{
          margin: 40px auto 15px;
          font-size: 28px;
        }
      }
    }
  }
  .itemDisabled{
    *{
      cursor: not-allowed;
    }
    .item-bg{
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
    .item-content{
      background-color: rgba(255,0,0,0.4);
      &:hover{
        background-color: rgba(255,0,0,0.7);
      }
    }
  }
</style>
