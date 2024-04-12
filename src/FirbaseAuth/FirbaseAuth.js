import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAApqmEPfwf3383lzdPFnvnnnVLziih0gc",
  authDomain: "ecommerceweb-5eecd.firebaseapp.com",
  projectId: "ecommerceweb-5eecd",
  storageBucket: "ecommerceweb-5eecd.appspot.com",
  messagingSenderId: "935796132726",
  appId: "1:935796132726:web:ba6cb353382e8460c3c857"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {app,auth,db};