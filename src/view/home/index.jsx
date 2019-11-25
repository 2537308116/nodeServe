import React from 'react';
import './index.less';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';


class Hom extends React.Component{
  constructor(props) {
      super(props);
      this.state={}
  }
  btn(){
    console.log(this)
    this.props.history.push('/Public')
  }
  render(){
    const { getFieldProps } = this.props.form;
      return(
          <div className="home">
              <div className="logo">
                   <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2471845590,913308006&fm=26&gp=0.jpg" alt=""/>
              </div>
              <div className="homeInput">
                  <List renderHeader={() => '登录'}>
                      <InputItem
                        {...getFieldProps('phone')}
                        type="phone"
                        placeholder="186 1234 1234"
                      >手机号码</InputItem>
                      <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="****"
                      >密码</InputItem>
                    </List>

                    <WhiteSpace />
              </div>
              <button className="btn" onClick={this.btn.bind(this)}>登录</button>
          </div>
      )
  }
}

const home = createForm()(Hom);
export default home;
