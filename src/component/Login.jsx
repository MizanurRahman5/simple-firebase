import { GithubAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const twitterProvider = new TwitterAuthProvider();

    const handleGoogleAuthSingIn = ()=>{

        signInWithPopup(auth, provider)
        .then((resut) =>{
            console.log(resut.user)
            setUser(resut.user)
        })
        .catch(error =>{
            console.log('ERROR', error)
            setUser(null)
        })
        
    }
    const handleSingOUt = () =>{
        signOut(auth)
        .then(() =>{
            console.log('sign out')
            setUser(null)
        })
        .catch(error =>{
            console.log('EROR', error)
        })
    }
    const handleGithubAuthSingIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(resut => {
            setUser(resut.user)
        })
        .catch(error => {
            console.log('ERROR' , error)
        })
    }
    const handleTwitterAuthSingIn = () =>{
        signInWithPopup(auth, twitterProvider)
        .then(rest => {
            setUser(rest.user)
        })
        .catch(error => {
            console.log('ERROR', error)
        })
    }


    return (
        <div>
        {
            user ? <button onClick={handleSingOUt}>sing Out</button> :
            <>
            <button onClick={handleGoogleAuthSingIn}>Login with google</button>
            <button onClick={handleGithubAuthSingIn}>Login with github</button>
            <button onClick={handleTwitterAuthSingIn}>Login with twitter</button>
            </>  
        }


        {user && <div>
            <h1>{user.displayName}</h1>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
            </div>}

        </div>
    );
};

export default Login;