import React from 'react';
import { ListView } from 'antd-mobile';
import './index.less'
// const {Component, PropTypes} = React
// 虚拟数据
const dataItem = {
  img: 'https://qcdn.zhangzhongyun.com/covers/154201203238462962.jpg?imageView2/0/w/300/q/75',
  title: 'Meet hotel',
  des: '不是所有的兼职汪都需要风吹日晒',
}
const data = []
for (let i = 0; i < 100; i++) {
  dataItem.key = i
  data.push(dataItem)
}
class Listview extends React.Component {
  constructor (props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
    this.state = {
      dataSource: dataSource.cloneWithRows({}),
      isLoading: true,
    }
  }
  componentDidMount () {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
      isLoading: false,
    })
  }
  // static propTypes = {
  //   dispatch: PropTypes.func
  // }
  renderList() {
    const row = (dataRow) => {
      return (
        <div className="bookList">
            <div className="book">
                <img src={dataRow.img} alt=""/>
            </div>
            <div className="describe">
                <p className="bookTitle">{dataRow.title}</p>
                <p>{dataRow.des}</p>
            </div>
        </div>
      )
    }
    return (
      <ListView
        style={{
          height: document.documentElement.clientHeight,
          overflow: 'auto',
        }}
        dataSource={this.state.dataSource} // 渲染的数据源
        renderFooter={() => (<div style={{padding: 30, textAlign: 'center'}}>
          {this.state.isLoading ? '加载中' : '加载完成'}
        </div>)}
        renderRow={row} // 单条数据
        pageSize={4} // 每次渲染的行数
        scrollRenderAheadDistance={500} // 当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行
        scrollEventThrottle={20} // 控制在滚动过程中，scroll事件被调用的频率
        onEndReachedThreshold={10} // 调用onEndReached之前的临界值，单位是像素
                onEndReached={() => {}} // 上拉加载事件
      />
    )
  }
  render () {
    return (
      <div
        className='bargain-container'
      >
        {data.length === 0 ? (<h1>暂时没有书籍</h1>) : this.renderList()}
      </div>
    )
  }
}
export default Listview