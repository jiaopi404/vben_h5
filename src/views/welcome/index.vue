<template>
  <div :class="prefixCls" class="fixIphonex">
    <Button class="btn_go-home" type="primary" @click="btnClickHandler">去 home</Button>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { Card, Button } from 'vant';
  import { useRouter } from 'vue-router';
  import { getPathByPathEnum } from '/@/utils/commonServe';
  import { MobileRoutePathEnum } from '/@/router/routes/modules/mobile';
  import { getConfig } from '/@/utils/commonServe/businessUtil';

  const { prefixCls } = useDesign('welcome-index');
  const router = useRouter();

  const priceRef = ref<number>(0);

  const btnClickHandler = () => {
    priceRef.value++;
    router.push(getPathByPathEnum(MobileRoutePathEnum.PARENT));
  };

  onMounted(() => {
    init();
  });

  const init = async () => {
    // 拉取配置
    await getConfig();
  };
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-welcome-index';

  .@{prefix-cls} {
    height: 100vh;
    width: 100vw;
    background-color: #eee;
    position: relative;
    .btn_go-home {
      position: absolute;
      top: 63%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
