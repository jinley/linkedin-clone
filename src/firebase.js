// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import { initializeApp } from "firebase/compat/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNE0tSyuCd3X8JSsBw5pYKhyK7CYc24PA",
    authDomain: "linkedin-clone-3dfe6.firebaseapp.com",
    projectId: "linkedin-clone-3dfe6",
    storageBucket: "linkedin-clone-3dfe6.appspot.com",
    messagingSenderId: "645352227201",
    appId: "1:645352227201:web:ac1c1c8952dbd5e7b72880"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };    