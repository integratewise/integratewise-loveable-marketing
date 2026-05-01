// Firebase client (browser-only). Lazily initialized so SSR/build doesn't try to connect.
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "AIzaSyB3RjGPCGn1QiTL0-M1BpHmGzZ_IYPXwS0",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "integratewise-staging.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "integratewise-staging",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "integratewise-staging.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "653103939382",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ?? "1:653103939382:web:a8b16b83c6b920d50b3d97",
};

let _app: FirebaseApp | undefined;
let _db: Firestore | undefined;

export function getFirebaseApp(): FirebaseApp {
  if (_app) return _app;
  _app = getApps()[0] ?? initializeApp(firebaseConfig);
  return _app;
}

export function getDb(): Firestore {
  if (_db) return _db;
  _db = getFirestore(getFirebaseApp());
  return _db;
}
