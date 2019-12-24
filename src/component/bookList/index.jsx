import React from 'react';
import './index.less'
import { Grid } from 'antd-mobile';
import {withRouter} from "react-router-dom"

  // const data1 = Array.from(new Array(9)).map(() => ({
  //   icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  // }));
  

  const GridExample = (props) => {
    // console.log(props)
    function toBookList(href){
      let url = href+'1.html'
      props.history.push({ pathname : '/bookChapter/'+url})
    }
    return (
      <div>
        <div className="sub-title">精选推荐</div>
        <Grid data={props.list}
          square={false}
          columnNum={3}
          renderItem={dataItem => (
            <div style={{ padding: '12.5px' }} onClick={() => toBookList(dataItem.href)}>
              <img src={dataItem.img} style={{ width: '75px', height: '105px' }} alt="" />
              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                <p className="textSpan">{dataItem.title}</p>
              </div>
            </div>
          )}
        />
      </div>
    )
  };

export default withRouter(GridExample)
