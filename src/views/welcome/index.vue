<template>
  <div :class="prefixCls">
    <Button type="primary" @click="btnClickHandler">主要按钮</Button>
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
  import { useRouter } from 'vue-router';
  import { getPathByPathEnum } from '/@/utils/commonServe';
  import { MobileRoutePathEnum } from '/@/router/routes/modules/mobile';

  const { prefixCls } = useDesign('welcome-index');
  const router = useRouter();

  const priceRef = ref<number>(0);

  const btnClickHandler = () => {
    priceRef.value++;
    router.push(getPathByPathEnum(MobileRoutePathEnum.PARENT));
  };
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-welcome-index';
</style>
