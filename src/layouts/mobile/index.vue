<template>
  <div :class="prefixCls">
    <keep-alive v-if="route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <router-view v-else />
  </div>
  <div class="layout-footer" v-if="!route.meta.hideTab">
    <TabBar :tabbars="tabbars" v-model="activeRoute" @change="handleChange" />
  </div>
</template>
<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  import TabBar from './tabbar/TabBar.vue';
  import { reactive, watch, ref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { ITabList } from './typings';
  // 测试husky
  const route = useRoute();
  const tabbars: Array<ITabList> = reactive([
    { title: '首页', to: '/home', icon: 'home-o' },
    { title: '项目信息', to: '/pkgInfo', icon: 'label-o' },
    { title: '案例', to: '/demo', icon: 'star-o' },
    { title: '关于我', to: '/about', icon: 'user-o' },
  ]);
  const activeRoute = ref(0);
  watch(activeRoute, (v) => {
    console.log('tab value v-model:', v);
  });
  const handleChange = (v: number) => {
    console.log('tab value @change:', v);
  };
  watch(route, (v) => {
    console.log('route', v.name);
  });

  const { prefixCls } = useDesign('layout-mobile-index');
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-mobile-index';
</style>
