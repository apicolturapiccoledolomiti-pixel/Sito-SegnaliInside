// Inizializza Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBeVcFSmovBntx5eEbkYt-HXAYua_aKTAo",
  authDomain: "sitosegnaliquantiasystems.firebaseapp.com",
  projectId: "sitosegnaliquantiasystems",
  storageBucket: "sitosegnaliquantiasystems.firebasestorage.app",
  messagingSenderId: "152551706602",
  appId: "1:152551706602:web:e50a05f1054d3582b36c93",
  measurementId: "G-L6JPLTKB8L"
};

// Initialize Firebase (controllo sicuro: evita doppia inizializzazione)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

/**
 * Registra un nuovo utente con email e password.
 * @param {string} email - L'email dell'utente.
 * @param {string} password - La password dell'utente.
 * @returns {Promise<firebase.auth.UserCredential>}
 */
function signUp(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

/**
 * Effettua il login con email e password.
 * @param {string} email - L'email dell'utente.
 * @param {string} password - La password dell'utente.
 * @returns {Promise<firebase.auth.UserCredential>}
 */
function signIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

/**
 * Effettua il logout dell'utente corrente.
 * @returns {Promise<void>}
 */
function signOut() {
  return auth.signOut();
}

/**
 * Salva i dati aggiuntivi dell'utente su Firestore.
 * @param {string} uid - L'ID univoco dell'utente.
 * @param {object} userData - I dati da salvare.
 * @returns {Promise<void>}
 */
function saveUserData(uid, userData) {
  return db.collection('users').doc(uid).set(userData, { merge: true });
}
