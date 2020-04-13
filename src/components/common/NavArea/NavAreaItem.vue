<template>
  <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6" class="NavArea-col">
    <div class="NavArea-item">
      <img class="item-bg" :src="itemList.bg" :alt="itemList.title">
      <div class="item-content">
        <p class="item-title">{{itemList.title}}</p>
        <div class="item-info">
          <ul>
            <li v-for="(item ,index) in itemList.msg" :key="index">
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
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  *{
    transition: .5s;
  }

  .NavArea-item {
    position: relative;
    height: 220px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: gray;
    color: #fff;
    font-family: "Arial","微软雅黑",serif;
    overflow: hidden;
    text-align: center;
    .item-bg{
      width: auto;
      height: 120%;
      margin: 0 -100%;
      transform-origin: 50% 50%;
      @media (max-width: 992px){
        width: 150%;
        height: auto;
      }
    }
    .item-content{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 80%;
      background-color: rgba(0,0,0,.4);
      .item-title{
        line-height: 47px;
        font-size: 18px;
        margin: 0;
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
      cursor: pointer;
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

</style>
