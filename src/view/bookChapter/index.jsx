import React from 'react';
import './index.less'


class bookChapter extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        console.log(this.props)
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
