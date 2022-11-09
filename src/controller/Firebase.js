import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth, deleteUser } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPRCztqigs08ldUqb4Jh8_34FnQnPuQcQ",
  authDomain: "firsttime-2942e.firebaseapp.com",
  projectId: "firsttime-2942e",
  storageBucket: "firsttime-2942e.appspot.com",
  messagingSenderId: "330732163031",
  appId: "1:330732163031:web:e4a2b5b9c2e9b4d4a90592",
  measurementId: "G-D7YKHM1X6H",
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);

export { auth, fireStore };

export const userSignIn = async (email, password) => {
  const userSigned = await signInWithEmailAndPassword(auth, email, password);
  return getData(userSigned.user.uid);
};

export const userRegister = async (
  email,
  password,
  name,
  birthdate,
  height,
  weight
) => {
  const userSignUp = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return await AddDatabase(
    userSignUp.user.uid,
    email,
    name,
    birthdate,
    height,
    weight
  );
};

export const AddDatabase = async (
  uid,
  email,
  name,
  birthdate,
  height,
  weight
) => {
  try {
    const tes = doc(fireStore, "users", uid);
    const tesData = {
      birthdate: birthdate,
      email: email,
      height: height,
      name: name,
      weight: weight,
      currMeal: -1,
    };
    await setDoc(tes, tesData);
    return getData(uid);
  } catch (error) {
    const user = auth.currentUser;
    deleteUser(user);
    return "failed";
  }
};

export const getData = async (uid) => {
  try {
    const docRef = await getDoc(doc(fireStore, "users", uid));
    return docRef.data();
  } catch (error) {
    return "NotFind";
  }
};
