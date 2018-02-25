import { combineReducers } from 'redux';

import ConfigReducers from './ConfigReducer';

const reducers = combineReducers({
  config: ConfigReducers,
});

export default reducers;