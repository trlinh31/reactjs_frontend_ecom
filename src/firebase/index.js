import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBUuXiQAOXECWdP0JUE8PE3NM25YaW2fVA',
  authDomain: 'react-ecommerce-d2ea4.firebaseapp.com',
  projectId: 'react-ecommerce-d2ea4',
  storageBucket: 'react-ecommerce-d2ea4.appspot.com',
  messagingSenderId: '983580279205',
  appId: '1:983580279205:web:3abfaa1f76d950fc3e284c',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
