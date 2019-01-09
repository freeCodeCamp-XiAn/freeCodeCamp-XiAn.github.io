

// @author duxx
import HttpClient from '@utils/HttpClient'
/**
 * 新建工单
 *
 * @export
 * @param {object} param {ObjIds : string[], ObjType: string, content?: string}
 * @param {string} [url=`api/worklist/`]
 * @returns Promise
 */
export function NewWorkList(param, url = `api/worklist/`) {
  return HttpClient.post(url, param)
}

/**
 * 忽略告警
 */
export function IngoreWarn(params, url= `api/warninfo/`) {
  return HttpClient.patch(url, params)
}
/**
 * 删除工单
 * 
 * @export
 * @param {*} params
 * @param {string} [url=`api/worklist/`]
 * @returns
 */
export function DeleteWorkList(params, url= `api/worklist/`) {
  return HttpClient.delete(`${url}${params.id}`, {})
}

/**
 * 短信催单
 * 
 * @param params 
 * @param url 
 */
export function ReminderBySMS(params, url= `api/sms/`) {
  return HttpClient.get(`${url}${params.workListId}`, {})
}
/**
 * 驳回工单
 * 
 * @param params 
 * @param url 
 */
export function Reject(params, url= `api/worklist/rejection/`) {
  return HttpClient.put(url, params)
}

/**
 * 审核工单
 * 
 * @param params 
 * {
 *  comments: '', // 审核备注
 *  result: false, // true为审核通过，false为审核不通过
 *  workListId: item.id // 工单id
 * }
 * @param url 
 */
export function Review(params, url= `api/worklist/review/`) {
  return HttpClient.put(url, params)
}

export default {
  IngoreWarn,
  NewWorkList,
  DeleteWorkList,
  ReminderBySMS,
  Reject,
  Review
}

