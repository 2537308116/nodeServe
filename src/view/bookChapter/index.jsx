import React from 'react';
import './index.less'
import url from 'url';

class bookChapter extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        console.log(url.parse(this.props.location.search,true).query)
        console.log(this.props.location.search)
    }
    render() {
        return (
          <div style={{'paddingTop':' 50px'}}>
              1111
          </div>
        );
    }
  }
export default bookChapter
