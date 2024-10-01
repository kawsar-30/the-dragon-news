import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword ,signOut,sendEmailVerification,sendPasswordResetEmail} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export  const AuthContext = createContext(null)
const auth =getAuth(app)
 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    
    const createUser=(email,password)=>{
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('suiiiiii')
            setLoading(false)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const logout = ()=>{
        setLoading(true)
      return  signOut(auth)
        
    }

    const logIn =(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
        
    }
 


    const authInfo ={
        user,
        createUser,
        logout,
        logIn,
        loading,
      
       

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;