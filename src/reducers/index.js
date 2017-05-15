import { combineReducers, createStore } from 'redux';
import { CLASSIFY_TEXT, SAVE_STORY } from '../actions/index';

import genres from './genre';
import classifier from './classifier';
import stories from './stories';

const rootReducer = combineReducers({
  genres,
  classifier,
  stories
});


const initialState = {
  classifier: [{classifier:"unknown", scale: 0}],
  stories: []
};


let store = createStore(rootReducer, initialState)






console.log(store.getState())



export default rootReducer;
