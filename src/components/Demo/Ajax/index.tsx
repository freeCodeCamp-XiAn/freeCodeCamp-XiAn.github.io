import * as React from 'react'
// import HttpClient from '@utils/HttpClient'
import { List, Avatar, Button } from 'antd'


interface IProps {
  test?: any
}
interface IBooks {
  id: {
    $oid: string
  },
  name: string,
  content: string,
  author: string
}
interface IState {
  userInfo?: any,
  ganks?: any,
  books?: IBooks[]
}

export default class AjaxTest extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      userInfo: {
        name: 'anonymous'
      }
    }
  }

  componentWillMount() {
    // HttpClient.get('/booksAPI/books', {}).then((res: any) => {
    //   // console.log(res)
    //   this.setState({
    //     books: res.data
    //   }, () => {
    //     // console.log('tset', this.state.books)
    //   })
    // })
  }
  componentDidMount() {
    // HttpClient.get('/randomuser/api/', {}).then((res: any) => {
    //   if (res!.results!.length > 0) {
    //     const length = res.results.length
    //     this.setState({
    //       userInfo: res.results[length - 1].user
    //     })
    //   }
    // }, err => {
    //   console.error(err)
    // })
    // HttpClient.get('/gank/api/xiandu/category/wow', {}).then((res: any) => {
    //   if (res!.results!.length > 0) {
    //     this.setState({
    //       ganks: res.results
    //     })
    //   }
    // })

  }
  /**
   * 删除书籍
   * @param {string} id id 唯一编号
   * @memberof HttpClientTest
   */
  deleteBook = (id: string) => {
    console.log(id)
  }

  render() {
    let userName = ''
    const userInfoName = this.state.userInfo.name
    if (userInfoName.first || userInfoName.last) {
      userName = `${userInfoName.first} ${userInfoName.last}`
    } else {
      userName = userInfoName
    }
    return (
      <div>
        {userName ? `hello: ${userName}` : false}
        <div>
          {
            this.state.ganks && this.state.ganks.map(item => {
              return <img key={item._id} src={item.icon} title={item.title} width={'100px'} height={'100px'} />
            })
          }
          {
            this.state.books && (
              <List
                itemLayout='horizontal'
                dataSource={this.state.books}
                renderItem={item => (
                  <List.Item key={Math.random()}>
                    <List.Item.Meta
                      avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                      title={<a href='https://ant.design'>{item.name}</a>}
                      description={item.content}
                    />
                    <Button onClick={this.deleteBook.bind(this, item._id.$oid)}>删除</Button>
                  </List.Item>
                )}
              />
            )
          }
        </div>
      </div>
    )
  }
}