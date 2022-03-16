import type { AppRouteModule } from '/@/router/types';

import { MOBILE_LAYOUT } from '/@/router/constant';

export enum MobileRoutePathEnum {
  PARENT = 'mobile',
  CHILD_HOME = 'home',
}

const mobile: AppRouteModule = {
  path: '/' + MobileRoutePathEnum.PARENT,
  name: 'Mobile',
  component: MOBILE_LAYOUT,
  redirect: '/' + MobileRoutePathEnum.PARENT + '/' + MobileRoutePathEnum.CHILD_HOME,
  meta: {
    orderNo: 10,
    // icon: 'ion:grid-outline',
    title: '首页',
  },
  children: [
    {
      path: MobileRoutePathEnum.CHILD_HOME,
      name: 'Home',
      component: () => import('/@/views/home/index.vue'),
      meta: {
        // affix: true,
        title: '首页',
      },
    },
  ],
};

export default mobile;
