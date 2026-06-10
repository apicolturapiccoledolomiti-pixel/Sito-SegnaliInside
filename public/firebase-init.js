// Inizializza Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBeVcFSmovBntx5eEbkYt-HXAYua_aKTAo",
  authDomain: "sitosegnaliquantiasystems.firebaseapp.com",
  projectId: "sitosegnaliquantiasystems",
  storageBucket: "sitosegnaliquantiasystems.appspot.com",
  messagingSenderId: "152551706602",
  appId: "1:152551706602:web:e50a05f1054d3582b36c93",
  measurementId: "G-L6JPLTKB8L"
};

// Inizializza Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Funzioni di autenticazione (esempio)
function signUp(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

function signIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

function signOut() {
  return auth.signOut();
}

// Esempio di come potresti salvare i dati dell'utente in Firestore
function saveUserData(userId, userData) {
  return db.collection('users').doc(userId).set(userData, { merge: true });
}
