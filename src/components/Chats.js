import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";

import { ChatEngine } from "react-chat-engine";

import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

import axios from "axios";

// Context
import { AuthContext } from "../Contexts/AuthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "2bd87723-cfee-47c6-ab33-9fe702cb0baf",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users", formData, {
              headers: {
                "private-key": "a7822621-d152-4cc1-840b-a8689509c6a4",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  if (!user || loading) return "Loading ...";

  return (
    <div>
      <Navbar logoutHandler={logoutHandler} />

      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="2bd87723-cfee-47c6-ab33-9fe702cb0baf"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
