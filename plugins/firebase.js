import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDxq4t1Qr6D3Btn_jr5gpanVtcxs0N2DXQ",
  authDomain: "martina-bd60b.firebaseapp.com",
  projectId: "martina-bd60b",
  storageBucket: "martina-bd60b.appspot.com",
  messagingSenderId: "461743507355",
  appId: "1:461743507355:web:0d5370842589447c1c833e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);

const firestore = getFirestore(app);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('auth', auth);
  nuxtApp.provide('firestore', firestore);
  nuxtApp.provide('storage', storage);
});