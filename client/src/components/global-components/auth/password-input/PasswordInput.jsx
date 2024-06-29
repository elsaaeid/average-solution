import React, { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from "./PasswordInput.module.scss";

const PasswordInput = ({name, value, placeholder, handleInputChange, onPaste}) => {
  // Password Show and UnShow State
  const [passwordShow,setPasswordShow] = useState(false);
  return (
    <div className="w-full flex flex-row justify-center items-center relative">
      <input
        type={!passwordShow ? "password" : "text"}
        placeholder={placeholder}
        required
        name={name}
        value={value}
        onChange={handleInputChange}
        onPaste={onPaste}
      />
      <div className={styles.showPass} onClick={()=>setPasswordShow(!passwordShow)} >
          {!passwordShow ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
      </div>
    </div>
  )
}

export default PasswordInput