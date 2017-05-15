import { SAVE_STORY } from '../actions/index';



export default function (state = [], action) { //If undefined then set to null

  console.log(state);

  switch(action.type) {
    case SAVE_STORY:

      return [ action.payload, ...state ]; //ES6 syntax to concat data and create a copy of state.
  }

  return state;


}

//
