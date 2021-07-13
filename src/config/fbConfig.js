/** @format */

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAPOI6Ekcqib-g_yj7ZVA_WXzNTDEmCNkU",
	authDomain: "mario-plan-c618f.firebaseapp.com",
	projectId: "mario-plan-c618f",
	storageBucket: "mario-plan-c618f.appspot.com",
	messagingSenderId: "882365823291",
	appId: "1:882365823291:web:935f60b0b9492ec72a1f1e",
	measurementId: "G-5XQS86Q1N1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
