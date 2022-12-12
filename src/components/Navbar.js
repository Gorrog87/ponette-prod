import "../assets/navbar.css";

export default function Navbar() {
  return (
    <>
      <div>
        <div className="container mx-auto my-5">
          <div className="flex justify-between">
            <div className="flex">
              <p className="mr-10">contact@ponetteprod.com</p>
              <p>07 66 73 26 43</p>
            </div>
            {/* <a className="" id="languages">
              EN
            </a> */}
          </div>
        </div>
        <hr></hr>
        <div className="flex justify-between">
          <div className="little-logo-color ">
            <div className="little-logo my-10 ml-20">
              <strong>Ponette</strong>
              <br></br>
              <strong>prod.</strong>
            </div>
          </div>
          <div className="flex justify-end items-baseline my-10 mr-10">
            <p className="mx-4">Accueil</p>
            <p className="mx-4">A propos</p>
            <p className="mx-4">Savoir-faire</p>
            <p className="mx-4">Portfolio</p>
            <p className="mx-4">Nos client(e)s</p>
            <p className="mx-4">F.A.Q.</p>
            <p className="mx-4">Plus</p>
            <button className="mx-4" id="devis">
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
