import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) history.push("/chats");
    });
  }, [user, history]);
  return (
    <div>
      <AuthContext.Provider value={user}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
