
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";

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

export{auth};
export const signIn = (props)=>{
    const {user} = auth.signInWithEmailAndPassword(props.email, props.password)
    console.log(user)
    .catch(error=>console.error(error));
}

export const register = (props)=>{

    const {user} = auth.createUserWithEmailAndPassword(props.email, props.password);
    console.log(user);
    createAccountDatabase(user, props.data)
    .catch(error=>console.error(error))
}

const createAccountDatabase = (props) =>{
    if(!user){
        alert("Account Already exist");
        return;
    }

    const item = props.data;

    const userRef = fireStore.doc(`users/${user.uid}`);

    const snapshot = userRef.get();

    if(!snapshot.exists){
        const email = item.email;
        const birthDate = item.birthDate;
        const name = item.name;
        const height = item.height;
        const weight = item.weight;
        const targetWeight = item.targetWeight;

        try {
            userRef.set([
                birthDate,
                email,
                height,
                name,
                targetWeight,
                weight
            ])
        } catch (error) {
            console.log("Error in create database user", error)
        }
    }
}

const getData = ()=>{

}