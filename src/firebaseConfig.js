import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAdrKNyjQuQmN3h1gHilXjN-df7n-6T9nM",
  authDomain: "ecommerce-d098d.firebaseapp.com",
  projectId: "ecommerce-d098d",
  storageBucket: "ecommerce-d098d.firebasestorage.app",
  messagingSenderId: "191102083353",
  appId: "1:191102083353:web:ecce0b5eb6e66337e6e588"
};

const app = initializeApp(firebaseConfig);

export default app;