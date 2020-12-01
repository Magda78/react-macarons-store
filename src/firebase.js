import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_kK-D92_K0DjP3Rw8civDbiErxxR2M_U",
    authDomain: "macarons-store.firebaseapp.com",
    databaseURL: "https://macarons-store.firebaseio.com",
    projectId: "macarons-store",
    storageBucket: "macarons-store.appspot.com",
    messagingSenderId: "585795000944",
    appId: "1:585795000944:web:08ce3bb7fbeb62f1a9f2b5",
    measurementId: "G-7VKZL51EJX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { db, auth, provider };