import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDdT0t8DtcmiUocL77aIUW55hWtLWa9phM",
  authDomain: "whatsapp-2-uncertain-01.firebaseapp.com",
  projectId: "whatsapp-2-uncertain-01",
  storageBucket: "whatsapp-2-uncertain-01.appspot.com",
  messagingSenderId: "685057256887",
  appId: "1:685057256887:web:a808e5c3a67a8ddbc68c32",
};

// If firebase is already initialized then we don't want to initialize again

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
