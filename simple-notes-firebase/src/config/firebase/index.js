import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyBnFBwnAq2RhqjM7mWBmEUYXi-9rPqX7Ms",
	authDomain: "simple-notes-firebase-9ad52.firebaseapp.com",
	projectId: "simple-notes-firebase-9ad52",
	storageBucket: "simple-notes-firebase-9ad52.appspot.com",
	messagingSenderId: "105238892881",
	appId: "1:105238892881:web:eacc6cdba0dbd88d2b0370",
	measurementId: "G-P54HDY2LYP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
