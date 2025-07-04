import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACkIZUx50LbxfgvW606eLaD6XhwNxIOuM",
  authDomain: "memberr-card.firebaseapp.com",
  databaseURL: "https://memberr-card-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "memberr-card",
  storageBucket: "memberr-card.firebasestorage.app",
  messagingSenderId: "532758260849",
  appId: "1:532758260849:web:309f8d8db5df773e64ffd0",
  measurementId: "G-CRH5Z9NQ6S"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.firebaseDB = db;
window.firebaseRef = ref;
window.firebasePush = push;
window.firebaseOnChildAdded = onChildAdded;

