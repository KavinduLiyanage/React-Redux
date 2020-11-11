import { FETCH_BUTTON_CLICKED, SELECT_POST } from "./types";
import axios from 'axios';

export const fetchPosts=()=>dispatch=>{
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(res=>{
      dispatch({
        type:FETCH_BUTTON_CLICKED,
        payload:res.data
      })
    })
}

// export const fetchPosts=()=>{
//     return{
//         type:FETCH_BUTTON_CLICKED,
//         payload: [
//             { id: 11, name: 'Adam', age: 23, group: 'editor' },
//             { id: 47, name: 'John', age: 28, group: 'admin' },
//             { id: 85, name: 'William', age: 34, group: 'editor' },
//             { id: 97, name: 'Oliver', age: 28, group: 'admin' }
//         ]
//     }
// }

export const selectPost=(post)=>{
    
    return{
        type:SELECT_POST,
        payload:post

    }
};