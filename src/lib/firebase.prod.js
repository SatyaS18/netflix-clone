import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBE-X5tLm0glxzzPCLx-tDXHs7jnpuHVFo",
  authDomain: "netflix-clone-aa676.firebaseapp.com",
  projectId: "netflix-clone-aa676",
  storageBucket: "netflix-clone-aa676.appspot.com",
  messagingSenderId: "590487180790",
  appId: "1:590487180790:web:3843701486bf5be5a4e3d7",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
