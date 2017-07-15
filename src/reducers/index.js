import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// import redux-form and grab the reducer property and create variable with it as "formReducer"
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
