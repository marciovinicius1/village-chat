import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MENSSAGING_SENDER_ID,
  appId: import.meta.env.VITE_API_KEY,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();

export { firebase, database, auth };
