import React, { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleBlur(e) {
    const isEmailCorrect = e.target.value.includes("@");
    if (!isEmailCorrect) {
      alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.`);
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </footer>
  );
}

export default Footer;
