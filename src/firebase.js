import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBO67OwDKz1DClk0JR1d3uDKMl38psm1Ss",
  authDomain: "fir-f9537.firebaseapp.com",
  databaseURL: "https://fir-f9537.firebaseio.com",
  projectId: "fir-f9537",
  storageBucket: "fir-f9537.appspot.com",
  messagingSenderId: "639041243354",
  appId: "1:639041243354:web:dbdc447b85f88ffb10fde3",
  measurementId: "G-XBEKYS58DQ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
