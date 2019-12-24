import React from 'react';
import Loop from '../../component/loop/index'
import BookList from '../../component/bookList/index'
import {getBookList} from '../../service/http.js'
import {connect} from 'react-redux';


class Index extends React.Component{
      constructor(props) {
        super(props)
        this.state = {
            userInfo:this.props.userInfo,
            list:[]
        }
      }
    async componentDidMount(){
        await getBookList({}).then(res => {
            if(res.code === 0){
                this.setState({
                    list:res.data
                })
            }
        })
    }
    render() {
        return (
          <div style={{'paddingTop':' 50px'}}>
              <Loop/>
              <BookList list={this.state.list} />
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state
    }
}
function mapDispatchToProps(dispatch) {
    // console.log(dispatch)
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);