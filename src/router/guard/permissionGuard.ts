import type { Router, RouteRecordRaw } from 'vue-router';

import { usePermissionStoreWithOut } from '/@/store/modules/permission';

import { PageEnum } from '/@/enums/pageEnum';
import { useUserStoreWithOut } from '/@/store/modules/user';

import { PAGE_NOT_FOUND_ROUTE } from '/@/router/routes/basic';

import { RootRoute } from '/@/router/routes';

const LOGIN_PATH = PageEnum.BASE_LOGIN;

const ROOT_PATH = RootRoute.path;

const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    console.log('入口： ', to, from);
    if (
      from.path === ROOT_PATH &&
      to.path === PageEnum.BASE_HOME &&
      userStore.getUserInfo.homePath &&
      userStore.getUserInfo.homePath !== PageEnum.BASE_HOME
    ) {
      console.log('to 1: ', userStore.getUserInfo);
      next(userStore.getUserInfo.homePath);
      return;
    }

    const token = userStore.getToken;

    // Whitelist can be directly entered
    // if (whitePathList.includes(to.path as PageEnum)) {
    //   if (to.path === LOGIN_PATH && token) {
    //     const isSessionTimeout = userStore.getSessionTimeout;
    //     try {
    //       await userStore.afterLoginAction();
    //       console.log('to 3: 执行完 afterLoginAction', userStore.getSessionTimeout);
    //       if (!isSessionTimeout) {
    //         console.log('to 4: !isSessionTimeout', to.query?.redirect);
    //         next((to.query?.redirect as string) || '/');
    //         return;
    //       }
    //     } catch {}
    //   }
    //   console.log('to 2 white path list: ', whitePathList);
    //   next();
    //   return;
    // }

    // token does not exist
    // if (!token) {
    //   // You can access without permission. You need to set the routing meta.ignoreAuth to true
    //   if (to.meta.ignoreAuth) {
    //     next();
    //     return;
    //   }

    //   // redirect login page
    //   const redirectData: { path: string; replace: boolean; query?: Recordable<string> } = {
    //     path: LOGIN_PATH,
    //     replace: true,
    //   };
    //   if (to.path) {
    //     redirectData.query = {
    //       ...redirectData.query,
    //       redirect: to.path,
    //     };
    //   }
    //   console.log('to 5: 没有token，redirect', redirectData);
    //   next(redirectData);
    //   return;
    // }

    // Jump to the 404 page after processing the login
    if (
      from.path === LOGIN_PATH &&
      to.name === PAGE_NOT_FOUND_ROUTE.name &&
      to.fullPath !== (userStore.getUserInfo.homePath || PageEnum.BASE_HOME)
    ) {
      next(userStore.getUserInfo.homePath || PageEnum.BASE_HOME);
      console.log(
        'to 6: from === LOGIN_PATH, to === PAGE_NOT_FOUND, 跳转主页, fullPath is: ',
        to.fullPath,
      );
      return;
    }

    // get userinfo while last fetch time is empty
    // if (userStore.getLastUpdateTime === 0) {
    //   console.log('to 7: 这个必不能走, userStore.getLastUpdateTime === 0', userStore);
    //   try {
    //     await userStore.getUserInfoAction();
    //   } catch (err) {
    //     next();
    //     return;
    //   }
    // }

    if (permissionStore.getIsDynamicAddedRoute) {
      console.log('to 8: permissionStore.getIsDynamicAddedRoute', permissionStore);
      next();
      return;
    }

    const routes = await permissionStore.buildRoutesAction();

    console.log('build Routes Action: routes is: ', routes);

    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw);
    });

    router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw);

    permissionStore.setDynamicAddedRoute(true);

    if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
      // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
      console.log('to 9: 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容', to);
      next({ path: to.fullPath, replace: true, query: to.query });
    } else {
      const redirectPath = (from.query.redirect || to.path) as string;
      const redirect = decodeURIComponent(redirectPath);
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
      console.log('to 10: to.name !== PAGE_NOT_FOUND_ROUTE.name', redirectPath, redirect, nextData);
      next(nextData);
    }
  });
}
