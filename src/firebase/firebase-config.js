
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD0dvhkuSaKYXkTMm1yMUmamQ537hScHiw",
    authDomain: "react-app-cursos-53892.firebaseapp.com",
    projectId: "react-app-cursos-53892",
    storageBucket: "react-app-cursos-53892.appspot.com",
    messagingSenderId: "391263224831",
    appId: "1:391263224831:web:77d806f53596b796bc1dca"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 //Reference to the database
 const db = firebase.firestore();
 //auth provider
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export {
     db, 
     googleAuthProvider, 
     firebase,
};
