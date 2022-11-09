
import { initializeApp } from "firebase/app";
import {getFirestore, setDoc, doc, getDoc} from "firebase/firestore";
import {getAuth, deleteUser} from "firebase/auth";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPRCztqigs08ldUqb4Jh8_34FnQnPuQcQ",
  authDomain: "firsttime-2942e.firebaseapp.com",
  projectId: "firsttime-2942e",
  storageBucket: "firsttime-2942e.appspot.com",
  messagingSenderId: "330732163031",
  appId: "1:330732163031:web:e4a2b5b9c2e9b4d4a90592",
  measurementId: "G-D7YKHM1X6H"
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);

export{auth, fireStore};

export const userSignIn = async (email, password)=>{
    
    try {
        const userSigned = await signInWithEmailAndPassword(auth, email, password);
        return getData(userSigned.user.uid);
    } catch (error) {
        console.log(error.code);
        if (error.code == "auth/wrong-password"){
            console.log(error.code)
            return "wrongPassword";
          }else if(error.code == "auth/user-not-found"){
            return "userNotFound";
          } 
    }
}

export const userRegister = async (email, password, name, birthdate, height, weight)=>{

    try {
        const userSignUp = await createUserWithEmailAndPassword(auth, email,password);
        return await AddDatabase(userSignUp.user.uid, email, name, birthdate, height, weight);
    } catch (error) {
        if(error.code === "auth/email-already-in-use"){
            return "emailAlreadyInUse";    
        }
        
    }

};

export const AddDatabase = async (uid, email, name, birthdate, height, weight) =>{
    try {
        const tes = doc(fireStore, "users", uid);
        const tesData = {
            birthdate: birthdate,
            email: email,
            height: height,
            name: name, 
            weight : weight
        }
        await setDoc(tes,tesData);
        return getData(uid);
    } catch (error) {
        const user = auth.currentUser;
        deleteUser(user);
        return "failed";
    }
}

export const getData = async (uid)=>{

    try {
        const docRef= await getDoc(doc(fireStore, "users",uid));
        console.log(docRef.uid);
        console.log(docRef.data());
        return docRef.data();
    } catch (error) {
        return "NotFind";
    }
}