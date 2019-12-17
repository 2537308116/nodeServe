import React from 'react';
import './index.less';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import {requestLogin} from '../../service/http.js'

class Hom extends React.Component{
  constructor(props) {
      super(props);
      this.state={}
  }
  btn(){
      this.props.form.validateFields((err, values) => {
          if (!err) {
              let form = {}
              form.phone = values.phone
              form.password = values.password
             requestLogin(form).then(res =>{
               if(res.code === 0){
                  sessionStorage.setItem('userInfo', JSON.stringify(res.date.userInfo));
                  this.props.history.push('/Public')
               }
             })
          } else {
              console.log(err)
          }
      });
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
                        type="number"
                        placeholder="18612341234"
                        maxLength={11}
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
