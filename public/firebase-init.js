
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeVcFSmovBntx5eEbkYt-HXAYua_aKTAo",
  authDomain: "sitosegnaliquantiasystems.firebaseapp.com",
  projectId: "sitosegnaliquantiasystems",
  storageBucket: "sitosegnaliquantiasystems.appspot.com",
  messagingSenderId: "152551706602",
  appId: "1:152551706602:web:e50a05f1054d3582b36c93",
  measurementId: "G-L6JPLTKB8L"
};

// Initialize Firebase (Correct V8 syntax)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const db = firebase.firestore();

// --- FUNZIONI AGGIUNTE ---

/**
 * Signs up a new user with email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<firebase.auth.UserCredential>}
 */
function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

/**
 * Saves additional user data to Firestore.
 * @param {string} uid - The user's unique ID.
 * @param {object} userData - The data to save.
 * @returns {Promise<void>}
 */
function saveUserData(uid, userData) {
    return db.collection('users').doc(uid).set(userData);
}
