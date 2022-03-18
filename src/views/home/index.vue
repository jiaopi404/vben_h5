<template>
  <div :class="prefixCls">
    <div class="warpper">
      <h1 class="demo-home__title">
        <!-- <img src="https://imgs.solui.cn/weapp/logo.png" /> -->
        <span>vite2 VUE3 H5开发模板</span>
      </h1>
      <h2 class="demo-home__desc">A vue h5 template with Vant UI</h2>
    </div>
    <div class="flex justify-center items-center shadow-lg m-5">
      <Button plain size="small" @click="logout"> 登&nbsp;&nbsp;出 </Button>
    </div>
    <div class="test-rpx">
      <div class="left child">宽度 50</div>
      <div class="right child">宽度 yeshi 50</div>
    </div>
    <div>
      <Card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
    <Cell icon="success" v-for="item in list" :key="item" :title="item" />
  </div>
</template>
<script lang="ts" setup>
  import { useDesign } from '/@/hooks/web/useDesign';
  import { Cell, Button, Card } from 'vant';
  import { useUserStore } from '/@/store/modules/user';

  const list = [
    'create-vue',
    'vite 2 + vue 3.2',
    '配置 ip 访问项目',
    '配置多环境变量',
    '配置 alias 别名',
    'Sass 全局样式',
    'Vue-router',
    'Pinia 状态管理',
    '使用 Mock 数据',
    '配置 proxy 跨域',
    '静态资源使用',
    'Axios 封装及接口管理',
    'vue-request 管理接口',
    'VantUI 组件按需加载',
    'viewport 适配方案',
    '适配苹果距离底部距离',
    '动态设置 title',
    '配置 Jssdk',
    'vconsole 移动端调试',
    '本地存储 storage 封装',
    'Eslint+Pettier 统一开发规范',
    'husky + lint-staged 提交校验',
  ];

  const { prefixCls } = useDesign('page-home');
  const userStore = useUserStore();

  const logout = () => {
    userStore.logout(true);
  };
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-page-home';

  .@{prefix-cls} {
    .warpper {
      padding: 12px;
      background: #fff;
      .demo-home__title {
        margin: 0 0 6px;
        font-size: 28px;
        .demo-home__title img,
        .demo-home__title span {
          display: inline-block;
          vertical-align: middle;
        }
        img {
          width: 32px;
        }
        span {
          margin-left: 16px;
          font-weight: 500;
        }
      }
      .demo-home__desc {
        margin-top: 10px;
        // margin: 0 0 10px;
        color: rgba(69, 90, 100, 0.6);
        font-size: 14px;
      }
    }

    .test-rpx {
      .child {
        height: 50px;
      }
      .left {
        width: 200rpx;
        background-color: red;
      }
      .right {
        width: 200px;
        background-color: blue;
      }
    }
  }
</style>
