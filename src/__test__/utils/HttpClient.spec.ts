import mockAdapter from '../__mock__'
import HttpClient from '@utils/HttpClient'

describe('HttpClient', () => {
  beforeEach(() => {
    mockAdapter.reset()
  })
  it('should exit', () => {
    expect(HttpClient).toBeDefined()
  })
  const mockParams = {
    'test': 'test',
    'number': 1,
    'boolean': true,
    'obj': {
      'b': 'b'
    },
    'array': [1, 2, 3],
    'null': null
  }
  const mockResp = {
    code: '200',
    data: {
      'test': 'test',
      'number': 1,
      'boolean': true,
      'obj': {
        'b': 'b'
      },
      'array': [1, 2, 3]
    }
  }
  it('参数测试数据已就绪', () => {
    expect(mockParams).toBeDefined()
  })
  it('响应测试数据已就绪', () => {
    expect(mockResp).toBeDefined()
  })
  it('get should return', () => {
    mockAdapter.onGet('/users').replyOnce(200, mockResp)
    expect.assertions(1)
    return HttpClient.get('/users', mockParams).then(res => {
      expect(res).toEqual(mockResp.data)
    })
  })
  it('post should return', () => {
    mockAdapter.onPost('/post').replyOnce(200, mockResp)
    return HttpClient.post('/post', mockParams).then(res => {
      expect(res).toEqual(mockResp.data)
    })
  })
  it('put should return', () => {
    mockAdapter.onPut('/put').replyOnce(200, mockResp)
    return HttpClient.put('/put', {}).then(res => {
      expect(res).toEqual(mockResp.data)
    })
  })
  it('delete should return', () => {
    mockAdapter.onDelete('/delete').replyOnce(200, mockResp)
    return HttpClient.delete('/delete', mockParams).then(res => {
      expect(res).toEqual(mockResp.data)
    })
  })
  it('状态码测试失败', () => {
    mockAdapter.onGet('/url', mockParams).replyOnce(500, { code: '9999', data: null })
    return HttpClient.get('/url/123', mockParams).then(res => {
      expect(res).not.toBeDefined()
    }, err => {
      expect(err).toBeDefined()
    })
  })

  it('返回结果测试失败', () => {
    mockAdapter.onGet('/url', mockParams).replyOnce(200, { code: '9999', data: null })
    return HttpClient.get('/url', mockParams).then(res => {
      expect(res).not.toBeDefined()
    }, err => {
      expect(err).toEqual('服务器状态不对')
    })
  })
  it('网络问题', () => {
    mockAdapter.onGet('/url', mockParams).networkError()
    return HttpClient.get('/url', mockParams).catch(res => {
      expect(res).toBeDefined()
    })
  })
})
