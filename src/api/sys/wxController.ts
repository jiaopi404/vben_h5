import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

export interface IJsSdk {
  signature: string;
  nonceStr: string;
  timestamp: string;
  appId: string;
}

const globSetting = useGlobSetting();

/**
 * 前端微信授权
 */
export const fetchWeChatAuth = () => {
  const redirectHref =
    'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
    globSetting.appId +
    '&redirect_uri=' +
    encodeURIComponent(location.href.split('?')[0]) +
    '&response_type=code&scope=snsapi_userinfo&state=' +
    'STATE' +
    '#wechat_redirect';
  return redirectHref;
};

/**
 * 服务端进行微信授权，回调返回token以及前端路由参数
 * get请求
 * @param {*} route 页面路由 location.href
 */
export const wechatRedirect = () => {
  console.log(`${globSetting.apiUrl}/wx/authorize?${location.href}`);
  return `${globSetting.apiUrl}/wx/authorize?route=${location.href}`;
};

/**
 * JS-SDK使用权限签名算法
 */
export const wxJssdk = (params: { url: string }) => {
  return defHttp.request<IJsSdk>({
    url: '/wx/jssdk',
    method: 'get',
    params,
  });
};
