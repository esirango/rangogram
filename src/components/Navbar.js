import React from "react";

import style from "./Navbar.module.css";

const Navbar = ({ logoutHandler }) => {
  return (
    <div className={style.container}>
      <div>
        <h2 className={style.title}>Rangogram</h2>
      </div>
      <div className={style.button} onClick={logoutHandler}>
        Log Out
      </div>
    </div>
  );
};

export default Navbar;
