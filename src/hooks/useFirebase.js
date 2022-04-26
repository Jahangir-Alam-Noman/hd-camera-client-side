import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState(' ');
  const [isLoading, setIsLoading] = useState(true);


  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setAuthError(' ');

      }).catch((error) => {
        setAuthError(error.message);

      })
      .finally(() => setIsLoading(false));
  }

  // observe user State
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribed;
  }, [])


  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }


  return {
    user,
    isLoading,
    signInWithGoogle,
    logOut,
    authError
  }
}

export default useFirebase;