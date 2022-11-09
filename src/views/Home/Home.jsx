 import { useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../controller/Firebase'
 
 const Home = ()=>{

    const [user, loading, error]= useAuthState(auth);
    const [logged, setLogged] = useState(false);
    console.log(user?.email)

    const email = user?.email;

    if(user?.email != undefined){
        setLogged(true)
    }
    

    return(
        <div>
            test
            {logged? 
            <div>
               <h1>Weclome {user?.email}</h1>
                <button onClick={()=>auth.signOut()}>sign out</button> 
            </div>
             :""}
            
        </div>
    )
 }

 export default Home;