import React from 'react';
import { SearchBar} from 'antd-mobile';
import ListView from '../../component/ListView/index'

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '美食',
        };
    }
    onChange= (value) => {
        console.log(value)
        this.setState({ value });
    };
    
    render() {
        return (
          <div style={{'padding-top':' 50px'}}>
              <SearchBar placeholder="搜索精彩书籍" onChange={this.onChange} maxLength={8} />
              <ListView/>
          </div>
        );
    }
}

export default Index