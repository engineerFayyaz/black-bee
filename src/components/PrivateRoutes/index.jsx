import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user); // Set isAuth to true if user exists, false otherwise
    });

      
    return () => unsubscribe();
  }, [auth]);

  if (isAuth === null) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return isAuth ? <Outlet /> : <Navigate to="/admin" />;
};

export default PrivateRoute;
