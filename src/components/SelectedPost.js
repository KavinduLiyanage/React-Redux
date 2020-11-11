import React, { Component } from 'react'
import { connect } from 'react-redux'

class SelectedPost extends Component {

    render() {
        if(!this.props.selectedPost){
            return(
                <h2>Not Selected</h2>
            )
        }
        return (
            <ul>
                <li>{this.props.selectedPost.id}</li>
                <li>{this.props.selectedPost.title}</li>
                <li>{this.props.selectedPost.body}</li>
            
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return{
        selectedPost:state.selectedPost
    }    
}

export default connect(mapStateToProps)(SelectedPost)
