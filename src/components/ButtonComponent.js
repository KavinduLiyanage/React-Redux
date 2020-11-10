import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/postAction';

function ButtonComponent() {
    return (
        <div>
            <button onClick={()=>this.props.fetchPosts()}>Click me</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts: fetchPosts},dispatch)
} 

export default connect(null,mapDispatchToProps)(ButtonComponent)