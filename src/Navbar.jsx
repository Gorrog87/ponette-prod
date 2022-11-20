import React from "react";
import "./assets/navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="d-flex">
          <p>contact@ponetteprod.com</p>
          <p>07 66 73 26 43</p>
        </div>
        <div>
          <p>Accueil</p>
          <p>A propos</p>
          <p>Savoir-faire</p>
          <p>Portfolio</p>
          <p>Nos client(e)s</p>
          <p>F.A.Q.</p>
          <p>Plus</p>
          <button>Demander un devis</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
