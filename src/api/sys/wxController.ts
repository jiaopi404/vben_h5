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
    '&response_type=code&scope=snsapi_base&state=' +
    '112233' +
    '#wechat_redirect';
  console.log('redirectHref is: ', redirectHref);
  debugger;
  return redirectHref;
};

// https://open.weixin.qq.com/connect/oauth2/authorize?
// appid=wx520c15f417810387&
// redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect

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
