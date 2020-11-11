import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { selectPost } from '../actions/postAction';

class PostList extends Component {

    constructor(props) {
        super(props);

        

        this.state = {
            country1:"",
            country2:""
        };

    }

    updateInput(key, value) {
        this.setState({
            [key]: value,
        });
    }

    createListItems() {
        
        return this.props.allPosts.map((post)=>{
            console.log(post);
            return(
            <li key={post.id} onClick={()=>this.props.selectPost(post)}>{post.title}{post.body}</li>
            )
        })
    }

    render() {
        if(!this.props.allPosts){
            return(
                <div>
                    <label>Country 1</label>
                <input type="text"
                    placeholder="Enter Country"
                    onChange={(e) =>
                        this.updateInput("country1", e.target.value)
                    }
                    required />
                <br/><br/>
                <h1>{this.state.country1}</h1>
                </div>               
            )
        }
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return{
        allPosts:state.allPosts
    }    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectPost: selectPost},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(PostList)