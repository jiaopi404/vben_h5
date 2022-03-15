<template>
  <VantConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <!-- <VantConfigProvider> -->
      <RouterView />
      <!-- </VantConfigProvider> -->
    </AppProvider>
  </VantConfigProvider>
</template>

<script lang="ts" setup>
  // import { ConfigProvider } from 'ant-design-vue';
  import { ConfigProvider as VantConfigProvider } from 'vant';
  import { AppProvider } from '/@/components/Application';
  import { useTitle } from '/@/hooks/web/useTitle';
  // import { useLocale } from '/@/locales/useLocale';

  // support Multi-language
  // const { getAntdLocale } = useLocale();

  // Listening to page changes and dynamically changing site titles
  useTitle();
</script>
