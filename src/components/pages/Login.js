import React from "react";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();

  function signInWithGoogle() {
    signInWithPopup(auth, provider).then(result => {
      navigate("/");
    });
  };

  return (
    <button onClick={signInWithGoogle}>SignIn with Google</button>
  );
};

export default Login;