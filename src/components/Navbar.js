import "../assets/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container mx-auto my-5">
          <div className="flex justify-between">
            <div className="flex">
              <p className="mr-10">contact@ponetteprod.com</p>
              <p>07 66 73 26 43</p>
              <div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flex justify-between md: relative">
          <div className="little-logo-color">
            <div className="little-logo md: absolute md: left-20 md: top-5">
              <div className="pr-3 pl-1">
                <strong className="">Ponette</strong>
              </div>
              <div className="text-start pl-1">
                <strong className="">prod.</strong>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-end md:items-baseline md:my-10 mr-11 md: md:absolute md: right-0 md: top-0">
            <p className="mx-4">Accueil</p>
            <p className="mx-4">A propos</p>
            <p className="mx-4">Savoir-faire</p>
            <p className="mx-4">Portfolio</p>
            <p className="mx-4">Nos client(e)s</p>
            <p className="mx-4">F.A.Q.</p>
            <p className="mx-4">Plus</p>
            <button className="mx-4 btn-primary" id="">
              Demander un devis
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
