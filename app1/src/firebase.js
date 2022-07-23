import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl4gbf7gT1t9WY8q_FVPgMcGn6EXWVT3I",
  authDomain: "tallerutt-262ad.firebaseapp.com",
  projectId: "tallerutt-262ad",
  storageBucket: "tallerutt-262ad.appspot.com",
  messagingSenderId: "778041738185",
  appId: "1:778041738185:web:10f9bf60462c177d6e1e18",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
