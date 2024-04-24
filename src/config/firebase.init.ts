import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDNHqMfhNRqXUTCbnJFi0lUOcNwMrtseVw",
  authDomain: "teamtreacker.firebaseapp.com",
  projectId: "teamtreacker",
  storageBucket: "teamtreacker.appspot.com",
  messagingSenderId: "537217560202",
  appId: "1:537217560202:web:91e2d96adc8e5c85b60773",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
