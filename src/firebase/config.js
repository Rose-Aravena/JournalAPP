import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB5CeXa0rZjpo4bSWqgPLgEz9KJ47E3elk",
//     authDomain: "journal-react-1476d.firebaseapp.com",
//     projectId: "journal-react-1476d",
//     storageBucket: "journal-react-1476d.appspot.com",
//     messagingSenderId: "994759350224",
//     appId: "1:994759350224:web:9a157560c85b412c6b8bd5"
// };

// testing
const firebaseConfig = {
    apiKey: "AIzaSyDgnS5goucP25NjFDlF19jCtPMFjiTJHOs",
    authDomain: "testing-be4b6.firebaseapp.com",
    projectId: "testing-be4b6",
    storageBucket: "testing-be4b6.appspot.com",
    messagingSenderId: "797730913293",
    appId: "1:797730913293:web:5b2b5e8d0046603b9ca944"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);