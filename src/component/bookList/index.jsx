import React from 'react';
import './index.less'
import { Grid } from 'antd-mobile';


  const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  }));
  
  
  const GridExample = () => (
    <div>
  
      <div className="sub-title">精选推荐</div>
      <Grid data={data1}
        square={false}
        columnNum={3}
        renderItem={dataItem => (
          <div style={{ padding: '12.5px' }}>
            <img src={dataItem.icon} style={{ width: '75px', height: '105px' }} alt="" />
            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
              <span>I am title..</span>
            </div>
          </div>
        )}
      />
    </div>
  );

export default GridExample
