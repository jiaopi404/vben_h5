<template>
  <div :class="prefixCls">
    <Button type="primary" @click="priceRef++">主要按钮</Button>
    <Card
      num="2"
      :price="priceRef"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { Card, Button } from 'vant';

  const { prefixCls } = useDesign('welcome-index');

  const priceRef = ref<number>(0);
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-welcome-index';
</style>
