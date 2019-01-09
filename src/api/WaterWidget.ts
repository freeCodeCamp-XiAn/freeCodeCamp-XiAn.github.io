// @author 谷中仁
import HttpClient from '@utils/HttpClient'

/**
 * 模式类型
 *
 * @enum {number}
 */
export enum RealTimeMod {
  VL        = 'VL', // '电压',
  GSM       = 'GSM', // '信号强度',
  TEMP      = 'TEMP', // '温度',
  PPTN      = 'PPTN', // '时段雨量',     // 后期更新
  RIVER     = 'RIVER', // '时段水位',
  SOIL      = 'SOIL', // '墒情',
  FAULTCODE = 'FAULTCODE', // '错误码',
  CPU       = 'CPU', // 'CPU利用率',
  MEMORY    = 'MEMORY', // '内存利用率',
  LIVESIGN  = 'LIVESIGN' // '存活状态'
}

export interface IGetWaterRealTimeChartDataParams {
  objId     : string,
  objType   : string,
  realType  : RealTimeMod,
  startTime?: number,
  endTime?  : number,
}
/**
 * 获取运维对象实时数据
 *
 * @export
 * @param {*} [params={}]
 * @param {string} [url='api/real/']
 * @returns
 */
export function GetWaterRealTimeChartData(params: IGetWaterRealTimeChartDataParams, url = 'api/real/') {
  return HttpClient.get(url, params)
}