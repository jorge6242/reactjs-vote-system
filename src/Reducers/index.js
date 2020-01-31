import {
  combineReducers
} from 'redux';

import modalReducer from './modalReducer';
import snackBarReducer from './snackBarReducer';
import loginReducer from './loginReducer';
import candidateReducer from './candidateReducer';
import marriageReducer from './marriageReducer';

const rootReducer = combineReducers({
  modalReducer,
  snackBarReducer,
  loginReducer,
  candidateReducer,
  marriageReducer,
});

export default rootReducer;