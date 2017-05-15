import { CLASSIFY_TEXT } from '../actions/index';
import { combineReducers, applyMiddleware, createStore } from 'redux';


import axios from 'axios';
import logger, { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


let happy = [];
let sad = [];


export default function (state =  null, action) {

  let classifier = {
      classifier: "unknown",
      scale: 0
  }



  switch(action.type) {
    case CLASSIFY_TEXT:

      const story = action.payload.storytext;

      const text = story.replace(/[^\w\s]/gi, '').split(" ");

      let pos = 0;
      let neg = 0;

      for (var i = 0; i < text.length; i++){
        if (happy.includes(text[i].toLowerCase())){
          pos++;
        }
        else if (sad.includes(text[i].toLowerCase())) {
          neg++;
        }
      }

      const classify = (a, b) => {

        if (a > 0 && a >= (b * 1.5)) {

          return true;
        }

        return false;
      }


      const scale = (a, b) => {

          let c = 0;


          if (b == 0) {
               c = a;
          }
          else {
              c = (a/b);
          }

         return (c);
      }


      if (classify(pos, neg)) {
          classifier.classifier = "happy";
          classifier.scale = scale(pos, neg);

      }
      else if (classify(neg, pos)) {
          classifier.classifier = "sad";
          classifier.scale = scale(neg, pos);
      }


      return classifier;




    default:

      return classifier;


  }


}


const initialState = {
  fetching: false,
  fetched: false,
  words: [],
  error: null
};

const words = (state=initialState, action) => {

    switch (action.type) {
      case "FETCH_WORDS": {

        return {...state, fetching:true }
        break;
      }
      case "FETCH_WORDS_ERROR": {
        return {...state, fetching:false, error: action.payload }
        break;
      }
      case "RECEIVE_WORDS": {

        happy = action.payload.happy;
        sad = action.payload.sad;

        return {...state,
          fetching:false,
          fetched: true,
          words: action.payload
        }
        break;
      }
    }
    return state;

}

const middleware = applyMiddleware(thunk, createLogger())
const store = createStore(words, middleware)

store.dispatch((dispatch) => {
  dispatch({type: "FETCH_WORDS"})
  axios.get('/api/words')
  .then((response) => {
    console.log(response);
    dispatch({type: "RECEIVE_WORDS", payload: response.data})
  })
  .catch((err) => {
    dispatch({type: "FETCH_WORDS_ERROR", payload: err})
  })
})
