import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAAVRRejO4DTs6RPsgJ89syVifJgoBqjjs',
  authDomain: 'nextjs-staybook.firebaseapp.com',
  projectId: 'nextjs-staybook',
  storageBucket: 'nextjs-staybook.appspot.com',
  messagingSenderId: '825006560986',
  appId: '1:825006560986:web:e71b90cfaf095d10e8f7e3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
