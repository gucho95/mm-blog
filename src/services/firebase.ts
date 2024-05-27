import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASURMENT_ID,
};

const initFirebase = () => {
  console.log("INIT FIREBASE");
  const firebaseApp = initializeApp(firebaseConfig);
  const authProvider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);
  const firestoreDb = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  return { auth, firestoreDb, firebaseApp, authProvider, storage };
};

export const { auth, firestoreDb, firebaseApp, authProvider, storage } =
  initFirebase();
