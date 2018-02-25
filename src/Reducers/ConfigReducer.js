// Knows what to do with all actions
import { CHANGE_MAIN_COLOR } from '../Constants/Actions/ConfigActions'

const default_state = {
  color: '#ccc',
  locale: 'en_US',
  language: 'english'
};

export default function configReducer(state = default_state, action) {
  switch (action.type) {
    case CHANGE_MAIN_COLOR:
      return {...state, color: action.payload};
    default:
      return state;
  }
}

