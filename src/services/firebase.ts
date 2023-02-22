// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAlagXtmwsSUAFPHR51ytaZOkriJPe8SGk",
	authDomain: "messenger-app-c911d.firebaseapp.com",
	databaseURL:
		"https://messenger-app-c911d-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "messenger-app-c911d",
	storageBucket: "messenger-app-c911d.appspot.com",
	messagingSenderId: "500603165275",
	appId: "1:500603165275:web:6cd91b245ff73383ed7d7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
