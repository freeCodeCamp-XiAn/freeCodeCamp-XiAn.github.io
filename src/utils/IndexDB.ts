
export default class IndexDB  {
  dbName: string
  dbVersion: number
  tableName: string
  permission: string
  private dbInstance: IndexDB | null
  constructor(dbName = 'Platform', dbVersion = 2018, tableName = 'history', permission = 'readwrite') {
    this.dbName = dbName
    this.dbVersion = dbVersion
    this.tableName = tableName
    this.permission = permission
  }
  isSupport() {
    return new Promise((resolved) => {
      if ('indexedDB' in window) {
        resolved(true)
      } else {
        alert('你的浏览器不支持历史记录功能！')
      }
    })
  }
  getInstance() {
    return this.isSupport().then(() => {
      if (!this.dbInstance) {
        return new Promise((resolve2, reject) => {
          const openRequest = window.indexedDB.open(this.dbName, this.dbVersion) // 打开指定数据库，没有的话就创建再打开
          // 数据库升级的回调 - onupgradeneeded的执行会在onsuccess和onerror之前
          openRequest.onupgradeneeded = (e: any) => {
            // console.log('第一次打开该数据库，或者数据库版本发生变化....')
            const db = e.target.result
            const storeNames = db.objectStoreNames
            if (!storeNames.contains(this.tableName)) {
              // 指定一个键为主键,且指定主键自增模式
              const store = db.createObjectStore(this.tableName, {
                keyPath: this.tableName + '_id',
                autoIncrement: true
              })
              // store.createIndex('idIndex', 'id', { unique: true })
              store.createIndex('idTitle', 'title', { unique: true })
            }
          }
          // 数据库打开成功的回调
          openRequest.onsuccess = (evt: any) => {
            // console.log('数据库打开成功...')
            const db1 = evt.target.result
            db1.transaction([this.tableName], this.permission) // 返回一个事务对象
            this.dbInstance = db1
            resolve2(db1)
          }
          // 数据库打开失败的回调
          openRequest.onerror = (e: any) => {
            console.error('indexDB打开失败...')
            reject(e)
          }
        })
      } else {
        return new Promise((resolve1, reject) => {
          if (this.dbInstance) {
            resolve1(this.dbInstance)
          } else {
            reject('cuole')
          }
        })
      }
    }, err => {
      console.error(err)
    })
  }


  public addData(datas: any[]) {
    return this.getInstance().then((db: any) => {
      const transaction = db.transaction(this.tableName, 'readwrite')
      const store = transaction.objectStore(this.tableName)
      for (const n of datas) {
        const request = store.add(n)
        request.onerror = (e) => {
          console.error(e)
        }
      }
    })
  }
  getData(callback) {
    this.getInstance().then((db: any) => {
      const transaction = db.transaction(this.tableName, 'readwrite')
      const store = transaction.objectStore(this.tableName)
      const request = store.openCursor()
      request.onsuccess = (e: any) => {
        const cursor = e.target.result
        if (cursor) {
          cursor.continue()
          callback(cursor.value)
        }
      }
      request.onerror = (e) => {
        console.error(e)
      }
    })
  }
  deleteAllData() {
    return this.getInstance().then((db: any) => {
      const transaction = db.transaction(this.tableName, 'readwrite')
      const store = transaction.objectStore(this.tableName)
      const request = store.clear()
      request.onerror = (e) => {
        console.error(e)
      }
      // request.onsuccess = () => {
      //   console.log('数据仓库' + this.tableName + '已清空')
      // }
    })
  }

}
