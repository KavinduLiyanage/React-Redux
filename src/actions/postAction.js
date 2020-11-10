import { FETCH_BUTTON_CLICKED } from "./types"

export const fetchPosts=()=>{
    return{
        type:FETCH_BUTTON_CLICKED,
        payload: [
            { id: 11, name: 'Adam', age: 23, group: 'editor' },
            { id: 47, name: 'John', age: 28, group: 'admin' },
            { id: 85, name: 'William', age: 34, group: 'editor' },
            { id: 97, name: 'Oliver', age: 28, group: 'admin' }
        ]
    }
}