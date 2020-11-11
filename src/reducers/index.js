import { combineReducers } from 'redux';
import AllPostReducer from './reducer-Allpost';
import SelectedPostReducer from './reducer-SelectedPost';

const rootReducer=combineReducers({
    allPosts:AllPostReducer,
    selectedPost:SelectedPostReducer
})

export default rootReducer;