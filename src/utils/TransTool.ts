/**
 * @author yihm
 * @date 2018/11/2 下午4:39
 * @desc 一些列转换工具
 */
export default {
  timeTrans: (timeStamp) => {
    const date = new Date(timeStamp)
    const Y = date.getFullYear()
    const M = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const D = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
    const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    return `${Y}-${M}-${D} ${h}:${m}:${s}`
  },
  sttpTrans: (val) => {
    let text = '未知类型'
     switch (val) {
       case 'MM':
         text = '气象站'
       break
       case 'BB':
         text = '蒸发站'
         break
       case 'DD':
         text = '堰闸水文站'
         break
       case 'TT':
         text = '潮位站'
         break
       case 'DP':
         text = '泵站'
         break
       case 'SS':
         text = '墒情站'
         break
       case 'PP':
         text = '雨量站'
         break
       case 'ZQ':
         text = '河道水文站'
         break
       case 'ZZ':
         text = '河道水位站'
         break
       case 'RR':
         text = '水库水文站'
         break
       case 'ZG':
         text = '地下水站'
         break
       case 'ZB':
         text = '分洪水位站'
         break
     }
     return text
  },
  warnType2Text: (val) => {
    let text = '普通'
    switch (val) {
      case 'LOSEWARN':
        text = '缺报'
        break
      case 'CPUWARN':
        text = 'CPU'
        break
      case 'WORKLISTWARN':
        text = '工单'
        break
      case 'HOSTLIVEWARN':
        text = '主机存活'
        break
      case 'SOILREALWARN':
        text = '墒情'
        break
      case 'RIVERREALWARN':
        text = '水情'
        break
      case 'PPTNREALWARN':
        text = '雨情'
        break
      case 'ETMPREALWARN':
        text = '温度'
        break
      case 'GSMREALWARN':
        text = '信号强度实时数据'
        break
      case 'VLREALWARN':
        text = '电压实时数据'
        break
      case 'MEMORYWARN':
        text = '剩余内存过小'
        break
      case 'WEBAPPWARN':
        text = 'web应用'
        break
      case 'DISKWARN':
        text = '磁盘'
        break
    }
    return text
  },
  statusNum2Text: (status) => {
    let text = '其他状态'
    switch (status) {
      case '1':
        text = '新建'
        break
      case '2':
        text = '派发'
        break
      case '3':
        text = '待复核'
        break
      case '4':
        text = '延期处理'
        break
      case '5':
        text = '已驳回'
        break
      case '6':
        text = '审核完成'
        break
    }

    return text
  }
}