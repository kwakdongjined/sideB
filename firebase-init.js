import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvCazMJGl5GAECo5xc4dZmzErDM1lchLg",
  authDomain: "product1-2f5f1.firebaseapp.com",
  projectId: "product1-2f5f1",
  storageBucket: "product1-2f5f1.firebasestorage.app",
  messagingSenderId: "822713386107",
  appId: "1:822713386107:web:a6aca873133c8921d20ede",
  measurementId: "G-WN47184JEG"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
