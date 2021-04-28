import firebase from 'firebase/app'
import 'firebase/firestore'
import  'firebase/auth'
var firebaseConfig = {
  apiKey: "AIzaSyC3rOxfm4VqQFUycWVvp9GbQwYHYD_Yp-g",
  authDomain: "careerado-backend.firebaseapp.com",
  projectId: "careerado-backend",
  storageBucket: "careerado-backend.appspot.com",
  messagingSenderId: "342393116664",
  appId: "1:342393116664:web:3fe0795608ec25d917680d",
  measurementId: "G-EK9E63L31F"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();
  export default firebase;