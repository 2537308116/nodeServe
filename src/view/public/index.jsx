import React from 'react';
import './index.less'
import { TabBar } from 'antd-mobile';
import Header from '../../component/header/index';
import Index from '../index/index';
import BookCity from '../bookCity/index';
import Member from '../member/index';

class Public extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: '1',
          fullScreen: true,
        };
    }
    filter(text){
      if(text === '1'){
        return '首页'
      }else if(text === '2'){
        return '书城'
      }else if(text === '3'){
        return '中心'
      }
    }
    renderContent(pageText) {
        return (
          <div  style={{ backgroundColor: 'white', height: '100%', textAlign: 'center'}}>
              <Header test={this.filter(pageText)}></Header>
              {pageText === '1'?<Index/>:pageText === '2'?<BookCity/>:<Member/>}
          </div>
        );
    }
    render() {
        return (
          <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="首页"
                key="首页"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === '1'}
                onPress={() => {
                  this.setState({
                    selectedTab: '1',
                  });
                }}
                data-seed="logId"
              >
                {this.renderContent('1')}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="书城"
                key="书城"
                selected={this.state.selectedTab === '2'}
                onPress={() => {
                  this.setState({
                    selectedTab: '2',
                  });
                }}
                data-seed="logId1"
              >
                {this.renderContent('2')}
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="中心"
                key="中心"
                selected={this.state.selectedTab === '3'}
                onPress={() => {
                  this.setState({
                    selectedTab: '3',
                  });
                }}
              >
                {this.renderContent('3')}
              </TabBar.Item>
            </TabBar>
          </div>
        );
      }
}
export default Public