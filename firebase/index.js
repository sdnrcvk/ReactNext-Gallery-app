import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB--are9M5XbH6hSMG5qwKKnxzGQU_6tsk",
    authDomain: "modern-react-app-57830.firebaseapp.com",
    projectId: "modern-react-app-57830",
    storageBucket: "modern-react-app-57830.appspot.com",
    messagingSenderId: "722629767790",
    appId: "1:722629767790:web:400033888b66fb5d836c7f"
};

initializeApp(firebaseConfig);

const db=getFirestore();
const storage=getStorage();

export {db,storage}