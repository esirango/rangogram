import React from "react";

//components
import Login from "./components/Login";
import Chats from "./components/Chats";

//react router dom
import { Switch, Route } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContextProvider";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
};

export default App;
