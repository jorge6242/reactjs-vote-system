import {
  combineReducers
} from 'redux';

import modalReducer from './modalReducer';
import snackBarReducer from './snackBarReducer';
import loginReducer from './loginReducer';
import candidateReducer from './candidateReducer';

const rootReducer = combineReducers({
  modalReducer,
  snackBarReducer,
  loginReducer,
  candidateReducer,
});

export default rootReducer;