import { HqlQueryDtoI } from '/#/business';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  AccountList = '/system/getAccountList',
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/getDeptList',
  setRoleStatus = '/system/setRoleStatus',
  saveConfigBaseInfo = '/configBaseInfo/saveConfigBaseInfo',
  saveConfigModule = '/configModule/saveConfigModule',
  saveConfigDictionary = '/configDictionary/saveConfigDictionary',
  getConfigBaseInfo = '/configBaseInfo/getConfigBaseInfo',
  getFileTypeList = '/fileType/getFileTypeList',
  getConfigDictionaryById = '/configDictionary/getConfigDictionaryById',
  getConfigModuleById = '/configModule/getConfigModuleById',
  getDictionaryList = '/dep/getDictionaryList',
  saveUser = '/user/saveUser',
  noSessionUpdatePassword = '/user/noSessionUpdatePassword',
  findByCode = '/role/findByCode',
  sendCodeMessage = '/user/sendCodeMessage',
  getAllOrgList = '/org/getAllOrgList',
  MenuList = '/menu/getMenuPageList',
  RolePageList = '/system/getRoleListByPage',
  GetAllRoleList = '/system/getAllRoleList',
  GetMenuPageList = '',
  GetDictionaryByParentId = '/dic/getDictionaryByParentId',
  GetDictionaryTreeByParentId = '/dic/getDictionaryTreeByParentId',
  getConfigBaseInfoAndSub = '/configBaseInfo/getConfigBaseInfoAndSub',
  GetDictionaryPageList = '/dic/getDictionaryPageList',
  getDepTreeList = '/dep/getDepTreeList',
  checkMobileRepeat = '/user/checkMobileRepeat',
  checkOldPassword = '/user/checkOldPassword',
  getUserByRoleAndMobile = '/user/getUserByRoleAndMobile',
  checkUserRepeat = '/user/checkUserRepeat',
  checkMobileCode = '/user/checkMobileCode',
  getCompetentDept = '/dep/getCompetentDept',
  getContractLeaderSelect = '/user/getContractLeaderSelect',
}

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });
// 根据字典id获取数据
export const getDictionaryByParentId = (params: number) =>
  defHttp.post({ url: Api.GetDictionaryByParentId, params }, { errorMessageMode: 'none' });
// 根据字典id获取数据
export const getDictionaryTreeByParentId = (data: number) =>
  defHttp.post({ url: Api.GetDictionaryTreeByParentId, data }, { errorMessageMode: 'none' });

export const saveConfigBaseInfo = (params?: any) =>
  defHttp.post({ url: Api.saveConfigBaseInfo, params });
export const saveConfigModule = (params?: any) =>
  defHttp.post({ url: Api.saveConfigModule, params });
export const getConfigBaseInfo = () => defHttp.get({ url: Api.getConfigBaseInfo });
export const getFileTypeList = () => defHttp.get({ url: Api.getFileTypeList });
export const getAllOrgList = () => defHttp.get({ url: Api.getAllOrgList });
export const getConfigDictionaryById = (params?: any) =>
  defHttp.post({ url: Api.getConfigDictionaryById, params });
export const getConfigModuleById = (params?: any) =>
  defHttp.post({ url: Api.getConfigModuleById, params });
export const getDictionaryList = (params?: any) =>
  defHttp.post({ url: Api.getDictionaryList, params });
export const saveUser = (params?: any) => defHttp.post({ url: Api.saveUser, params });
export const noSessionUpdatePassword = (params?: any) =>
  defHttp.post({ url: Api.noSessionUpdatePassword, params });
export const findByCode = (data?: any) => defHttp.post({ url: Api.findByCode, data });
export const sendCodeMessage = (params?: any) => defHttp.post({ url: Api.sendCodeMessage, params });
// 获取配置信息
export const getConfigBaseInfoAndSub = (params: number) =>
  defHttp.post({ url: Api.getConfigBaseInfoAndSub, params }, { errorMessageMode: 'none' });
export const saveConfigDictionary = (params?: any) =>
  defHttp.post({ url: Api.saveConfigDictionary, params });
// 获取数据字典
export const getDictionaryPageList = (params?: HqlQueryDtoI) =>
  defHttp.post({ url: Api.GetDictionaryPageList, params }, { errorMessageMode: 'none' });
export const getDepTreeList = (params?: any) => defHttp.post({ url: Api.getDepTreeList, params });
export const checkMobileRepeat = (params?: any) =>
  defHttp.post<any>({ url: Api.checkMobileRepeat, params });
export const checkOldPassword = (params?: any) =>
  defHttp.post<any>({ url: Api.checkOldPassword, params });
export const getUserByRoleAndMobile = (params?: any) =>
  defHttp.post<any>({ url: Api.getUserByRoleAndMobile, params });
export const checkUserRepeat = (params?: any) =>
  defHttp.post<any>({ url: Api.checkUserRepeat, params });
export const checkMobileCode = (params?: any) =>
  defHttp.post<any>({ url: Api.checkMobileCode, params });
export const getCompetentDept = (params?: any) =>
  defHttp.post({ url: Api.getCompetentDept, params });
export const getContractLeaderSelect = (params?: any) =>
  defHttp.post({ url: Api.getContractLeaderSelect, params });
