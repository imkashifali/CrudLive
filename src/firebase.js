import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBvpSSOMprQiTTXSb2oK4Xi4KG2OH7skL0",
  authDomain: "testingcrud-b3d4c.firebaseapp.com",
  databaseURL: "https://testingcrud-b3d4c.firebaseio.com",
  projectId: "testingcrud-b3d4c",
  storageBucket: "testingcrud-b3d4c.appspot.com",
  messagingSenderId: "883421176583",
  appId: "1:883421176583:web:8932eb4639e74380e65ba2",
  measurementId: "G-WQMDMEHD20",
});

const db = firebaseApp.firestore();

export default db;
