import React from "react";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login({ isAuth, setIsAuth }) {
  let navigate = useNavigate();

  function signInWithGoogle() {
    signInWithPopup(auth, provider).then(result => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate('/');
    });
  };

  function signOutFromGoogle() {
    signOut(auth).then(result => {
      localStorage.clear("isAuth", false);
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <>
    { isAuth ? (
      <div>
        <button onClick={signOutFromGoogle}>Sign Out</button>
      </div>
    ) : (
      <div>
        <p>Sign In with Google to continue</p>
        <button onClick={signInWithGoogle}>Sign in</button>
      </div>
    )
    }
    </>
  );
};

export default Login;