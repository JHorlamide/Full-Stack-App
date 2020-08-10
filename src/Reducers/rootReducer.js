import { combineReducers } from 'redux';

/*** FirestoreReducer for syncing our data to the database data ***/
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

/*** Custom Component ***/ 
import authReducer from './authReducer';
import projectReducer from './projectReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;