import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAjsNDo8r2TloUrJtvc_nmyuESMUyakicQ",
  authDomain: "lendsqr-assessment-88f7d.firebaseapp.com",
  projectId: "lendsqr-assessment-88f7d",
  storageBucket: "lendsqr-assessment-88f7d.appspot.com",
  messagingSenderId: "1034709562617",
  appId: "1:1034709562617:web:f7fb77ef7cabd2ef519e28"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth, firebaseApp };