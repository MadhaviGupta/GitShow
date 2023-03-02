import { useEffect } from "react";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";

export default function useProtectedRoute() {
  const history = useNavigate();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        console.error(
          "Access to protected route denied, redirecting to login..."
        );
        history("/");
      }
    });
  }, [history]);
}
