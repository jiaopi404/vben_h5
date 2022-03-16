<template>
  <Tabbar v-model="active" :class="prefixCls" route fixed>
    <TabbarItem v-for="item in tabbars" :to="item.to" :icon="item.icon" :key="item.to">
      {{ item.title }}
    </TabbarItem>
  </Tabbar>
</template>
<script lang="ts" setup>
  import { useDesign } from '/@/hooks/web/useDesign';

  import { computed, PropType } from 'vue';
  import { Tabbar, TabbarItem } from 'vant';
  import { ITabList } from '../typings';

  const props = defineProps({
    tabbars: {
      type: Array as PropType<ITabList[]>,
      default: () => [],
    },
    active: Number,
  });
  const emit = defineEmits(['change', 'update:active']);
  const active = computed({
    get: () => props.active,
    set: (val) => {
      emit('update:active', val);
      emit('change', val);
    },
  });

  const { prefixCls } = useDesign('layout-mobile-tabbar');
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-mobile-tabbar';
</style>
