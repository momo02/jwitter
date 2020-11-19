import firebase from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhO2z4XttSXpDzhbwDQg0zsjpkNiCwSdI",
    authDomain: "jwitter-f28a0.firebaseapp.com",
    databaseURL: "https://jwitter-f28a0.firebaseio.com",
    projectId: "jwitter-f28a0",
    storageBucket: "jwitter-f28a0.appspot.com",
    messagingSenderId: "365459827623",
    appId: "1:365459827623:web:caa23774980bdefeaaa482"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
