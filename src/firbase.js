// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAC8ykoYU3LAhjl9LevHpTZfDDcI0TzguM",
  authDomain: "clone-cf0b1.firebaseapp.com",
  projectId: "clone-cf0b1",
  storageBucket: "clone-cf0b1.appspot.com",
  messagingSenderId: "684204196646",
  appId: "1:684204196646:web:a4ce01c4753c78a68bf7e7",
  measurementId: "G-NE4JS8T5DE"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }