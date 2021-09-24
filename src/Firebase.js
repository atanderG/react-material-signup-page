
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCiy2--BT9ZGx2jjyrBarDVfIk_Y3eMJKE",
  authDomain: "todo-app-react-9ae0b.firebaseapp.com",
  projectId: "todo-app-react-9ae0b",
  storageBucket: "todo-app-react-9ae0b.appspot.com",
  messagingSenderId: "426353532524",
  appId: "1:426353532524:web:d1c317c61780a27dde8249"
});

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const db = getFirestore(firebaseApp);
const db = firebaseApp.firestore();
export default db;

