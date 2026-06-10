// ============================================================
// Firebase Initialization - Versione robusta
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyBeVcFSmovBntx5eEbkYt-HXAYua_aKTAo",
  authDomain: "sitosegnaliquantiasystems.firebaseapp.com",
  projectId: "sitosegnaliquantiasystems",
  storageBucket: "sitosegnaliquantiasystems.firebasestorage.app",
  messagingSenderId: "152551706602",
  appId: "1:152551706602:web:e50a05f1054d3582b36c93",
  measurementId: "G-L6JPLTKB8L"
};

// Usa un'app con nome univoco per evitare conflitti
// con estensioni browser o altri script che usano l'app "default"
const APP_NAME = "segnali-inside-app";

let _app;
try {
  // Prova a ottenere l'app con il nostro nome
  _app = firebase.app(APP_NAME);
} catch (e) {
  // Non esiste ancora, la creiamo
  _app = firebase.initializeApp(firebaseConfig, APP_NAME);
}

const auth = firebase.auth(_app);
const db = firebase.firestore(_app);

/**
 * Registra un nuovo utente con email e password.
 */
function signUp(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

/**
 * Effettua il login con email e password.
 */
function signIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

/**
 * Effettua il logout dell'utente corrente.
 */
function signOut() {
  return auth.signOut();
}

/**
 * Salva i dati aggiuntivi dell'utente su Firestore.
 */
function saveUserData(uid, userData) {
  return db.collection('users').doc(uid).set(userData, { merge: true });
}
