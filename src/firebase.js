import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtzNR5wJqlJj7fcxBdaS9VLO-DRw_ovZQ",
  authDomain: "tinder-clone-b1d2c.firebaseapp.com",
  projectId: "tinder-clone-b1d2c",
  storageBucket: "tinder-clone-b1d2c.appspot.com",
  messagingSenderId: "966702407712",
  appId: "1:966702407712:web:5e8fbb6875b459d7579c45",
  measurementId: "G-635XYDDBVB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
