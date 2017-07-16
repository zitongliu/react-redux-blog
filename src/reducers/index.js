import { combineReducers } from 'redux';
// import redux-form and grab the reducer property and create variable with it as "formReducer"
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
