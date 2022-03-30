import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAcElmnHWtkc86UD0W_N83vunluhraAbBg",
  authDomain: "sofka-chatty.firebaseapp.com",
  projectId: "sofka-chatty",
  storageBucket: "sofka-chatty.appspot.com",
  messagingSenderId: "1058869197859",
  appId: "1:1058869197859:web:10fcabacf788cb3f8d0596"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); 
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };

