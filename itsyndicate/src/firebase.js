import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlYzUWaSqXWOmaTUCmxiaosKjm_t4aY4A",
    authDomain: "it-syndicate.firebaseapp.com",
    databaseURL: "https://it-syndicate.firebaseio.com",
    projectId: "it-syndicate",
    storageBucket: "it-syndicate.appspot.com",
    messagingSenderId: "577873897168",
    appId: "1:577873897168:web:71f0305a5c1e588d9a60d5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};

export default db;