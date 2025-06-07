import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDwa6u250jtDQ7moXHvv9nOuc6wweKM_NI",
    authDomain: "line-clone-d171d.firebaseapp.com",
    projectId: "line-clone-d171d",
    storageBucket: "line-clone-d171d.firebasestorage.app",
    messagingSenderId: "410747614454",
    appId: "1:410747614454:web:f3382ef3ff0a1e982a68d7"

});

//databese
const db = firebaseApp.firestore();
//
const auth = firebase.auth();

export { db, auth };