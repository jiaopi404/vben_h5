import { useUserStoreWithOut } from '/@/store/modules/user';
import type { Router } from 'vue-router';
import { getQueryParams, isWeChat } from '/@/utils/commonServe';
import { fetchWeChatAuth } from '/@/api/sys/wxController';
import { useLinkStoreWithOut } from '/@/store/modules/link';
import { phoneModel } from '/@/utils/commonServe/mobile';

interface QueryParamsI {
  code: string;
}

export function createMobileGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  router.beforeEach((form, to, next) => {
    //! 解决ios微信下，分享签名不成功的问题,将第一次的进入的url缓存起来。
    // @ts-ignore
    if (window.entryUrl === undefined) {
      // @ts-ignore
      window.entryUrl = location.href.split('#')[0];
    }
    const { code } = getQueryParams<QueryParamsI>();
    // 微信浏览器内微信授权登陆
    if (isWeChat()) {
      console.log('是不是微信服务器');
      // if (code) {
      //   authStore.setIsAuth(true);
      //   authStore.setCode(code);
      // }
      // if (!authStore.isAuth) {
      //   location.href = fetchWeChatAuth();
      // }
      // 根据 token 判断
      if (code) {
        console.log('code is: ', code);
        // authStore.setIsAuth(true);
        // authStore.setCode(code);
      }
      if (!userStore.getToken) {
        console.log('no token, fetch wechat auth');
        location.href = fetchWeChatAuth();
      }
    }
    next();
  });

  router.afterEach((to) => {
    const linkStore = useLinkStoreWithOut();
    let url;
    if (phoneModel() === 'ios') {
      // @ts-ignore
      url = window.entryUrl;
    } else {
      url = window.location.href;
    }
    console.log('linkStore', linkStore);

    // 保存url
    linkStore.setInitLink(url);
  });
}
