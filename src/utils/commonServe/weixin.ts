/**
 * 判断是否是微信浏览器
 */
export const isWeChat = () => {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  const ua = navigator.userAgent;
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  return !!ua.match(/MicroMessenger/i);
};
