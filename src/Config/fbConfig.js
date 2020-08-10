import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBK-0DaLaDdQrXxcejbccvJvVbopYOx2Ig",
  authDomain: "marioplan-bc43b.firebaseapp.com",
  databaseURL: "https://marioplan-bc43b.firebaseio.com",
  projectId: "marioplan-bc43b",
  storageBucket: "marioplan-bc43b.appspot.com",
  messagingSenderId: "229945211445",
  appId: "1:229945211445:web:4ea9ba6204be4b9a93cf7c",
  measurementId: "G-MWYEB88VG6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;