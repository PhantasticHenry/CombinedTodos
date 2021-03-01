import React from "react";
import styles from "./SignInThrough.module.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

function SignInThrough() {
  return (
    <div className="reactIconsContainer">
      <IconContext.Provider value={{ className: styles.reactIcons }}>
        <FaFacebook />
        <AiFillGoogleCircle />
        <AiFillGithub />
      </IconContext.Provider>
    </div>
  );
}

export default SignInThrough;
