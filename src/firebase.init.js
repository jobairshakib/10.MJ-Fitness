// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR48hwP3Afh6Q4NdCC5-zDl6Vg7Gw0LzE",
    authDomain: "mj-fitness.firebaseapp.com",
    projectId: "mj-fitness",
    storageBucket: "mj-fitness.appspot.com",
    messagingSenderId: "596144169790",
    appId: "1:596144169790:web:671c98d9151b1c655e826f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;