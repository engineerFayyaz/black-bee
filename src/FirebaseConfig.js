import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBxegQR8mZdb885L_9G3z7Q2GDuhprEqf8",
  authDomain: "blackmagic-indian.firebaseapp.com",
  projectId: "blackmagic-indian",
  storageBucket: "blackmagic-indian.appspot.com",
  messagingSenderId: "144586616944",
  appId: "1:144586616944:web:642d9d035c10d9fce704b5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db ,app};