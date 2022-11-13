import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";

function Logout() {
  let navigate = useNavigate();

  useEffect(() => {
    signOutFromGoogle();
  });

  function signOutFromGoogle() {
    signOut(auth).then(() => {
      navigate("/");
    });
  };
};

export default Logout;