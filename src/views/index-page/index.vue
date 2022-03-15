<template>
  <div :class="prefixCls"> this is index page </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('index-page');
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-index-page';
</style>
