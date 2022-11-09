
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, Timestamp, getDocs, query, where} from "firebase/firestore";
import {getAuth} from "firebase/auth";
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

export{auth};
export const signIn = (email, password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((user)=>console.log(user))
    .catch(error=>console.error(error));
}

// export const register = (user, additionalData)=>{

//     const {user} = auth.createUserWithEmailAndPassword(props.email, props.password);
//     console.log(user);
//     createAccountDatabase(user, props.data)
//     .catch(error=>console.error(error))
// };

// const AddDatabase = (email, name, birthdate, height, weight) =>{
//     try {
//         const docRef = addDoc(collection(db, "users"),{
//             birthdate: Timestamp.fromDate(birthdate),
//             email: email,
//             height: height,
//             name: name, 
//             weight : weight
//         });


//         console.log("Document ID : ", docRef.id);
//     } catch (error) {
//         console.log("terjadi error : ",error)
//     }
// }

// const getData = (email)=>{
//     const q= query(collection(db, "users"), where("email","==", email))

//     const querySnapshot = getDocs(q);

//     querySnapshot.forEach((doc)=> {
//         console.log(doc.id, "=>", doc.data());
//     });
// }