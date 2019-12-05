import React from 'react';
import './index.less'
import { List } from 'antd-mobile';
const Item = List.Item;

class Member extends React.Component{
    
    render() {
        return (
          <div className="member">
              <div className="header">
                  <div className="userHeader">
                        <p>个人资料</p>
                        <div className="userTitle">

                        </div>
                        <p>账号管理</p>
                  </div>
              </div>
              <List>
                  <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    arrow="horizontal"
                    onClick={() => {}}
                  >阅读记录</Item>
                  <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {}}
                    arrow="horizontal"
                  >
                    我的书籍
                  </Item>
                  <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {}}
                    arrow="horizontal"
                  >
                    常见问题
                  </Item>
                  <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {}}
                    arrow="horizontal"
                  >
                    设置
                  </Item>
              </List>
          </div>
        );
    }
}

export default Member