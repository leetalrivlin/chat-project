import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAspXuzqrsfI65AZZY4W_uFkRR6q3fXpR4",
    authDomain: "chat-936b9.firebaseapp.com",
    databaseURL: "https://chat-936b9.firebaseio.com",
    projectId: "chat-936b9",
    storageBucket: "chat-936b9.appspot.com",
    messagingSenderId: "532059847411",
    appId: "1:532059847411:web:a972b2f813914a0f1a5586",
    measurementId: "G-F3EF3QFN81"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  firebase.analytics();

  export default firebaseApp.firestore()