import React from 'react';
import Loop from '../../component/loop/index'
import BookList from '../../component/bookList/index'


class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
          <div style={{'padding-top':' 50px'}}>
              <Loop/>
              <BookList/>
          </div>
        );
    }
}

export default Index