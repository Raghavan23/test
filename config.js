import firebase from "firebase/compat/app";
import { getDataBase } from "firebase/database";

const firebaseConfig = {};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDataBase();
export { db };
