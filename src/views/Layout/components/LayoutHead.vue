<script setup>
import { Search } from "@element-plus/icons-vue";
const confirmVCC = () => {
  console.log("前往VCC主页");
};

import { h } from "vue";
import { ElNotification } from "element-plus";
// 菜单头
</script>

<template>
  <header class="app-header">
    <div class="container">
      <span>
        <h1 class="logo">
          <a href="https://vcc.tech/people" target="_blank">深圳大学主页</a>
        </h1>
      </span>

      <!-- button -->
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content ep-bg-purple">
            <el-popover
              placement="bottom"
              title="Html&Css"
              :width="200"
              trigger="click"
              content="not found"
            >
              <template #reference>
                <el-button>Html&Css</el-button>
              </template>
            </el-popover>
          </div>
        </el-col>
        <el-col :span="6"
          ><div class="grid-content ep-bg-purple">
            <el-popover
              placement="bottom"
              title="JavaScript"
              :width="200"
              trigger="click"
              content="not found"
            >
              <template #reference>
                <el-button>JavaScript</el-button>
              </template>
            </el-popover>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="grid-content ep-bg-purple">
            <el-popover
              placement="bottom"
              title="Ajax"
              :width="200"
              trigger="click"
              content="not found"
            >
              <template #reference>
                <el-button>Ajax</el-button>
              </template>
            </el-popover>
          </div></el-col
        >
        <el-col :span="6"
          ><div class="grid-content ep-bg-purple">
            <el-popover
              placement="bottom"
              title="Vue"
              :width="200"
              trigger="click"
              content="not found"
            >
              <template #reference>
                <el-button>Vue</el-button>
              </template>
            </el-popover>
          </div></el-col
        >
      </el-row>

      <div class="search">
        <input type="text" placeholder="搜索我的个人作品" />
        <i><el-button type="primary" :icon="Search"></el-button></i>
      </div>
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .demo-collapse {
    padding-top: 50px;
    margin: 0px 600px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .el-button {
      width: 85px;
      background-color: #fff;
      color: black;
      border: 1px solid black;
    }

    .el-row {
      position: relative;
      left: -10px;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .logo {
    display: flex;
    height: 180px;
    width: 200px;
    align-items: center;

    a {
      display: block;
      height: 130px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/szdxlogo.png") no-repeat center 0px /
        contain;
    }
  }

  .search {
    display: flex;
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    left: -20px;

    .el-button {
      margin-top: -4px;
      width: 50px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
      border: 1px solid black;
      height: 32px;
      border-radius: 3px;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>