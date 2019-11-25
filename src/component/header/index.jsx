import { NavBar } from 'antd-mobile';
import React from 'react';
import './index.less'

const Header = (props) =>{
  return (
    <div>
        <NavBar mode="dark">{props.test}</NavBar>
    </div>
  );
}

export default Header