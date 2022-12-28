// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Video from "../components/Video";
// import Instagram from "../components/Instagram";
import { BsFacebook } from "react-icons/bs/";
import { GrInstagram } from "react-icons/gr";
// import "../assets/navbar.css";
// import "../assets/hero.css";

export default function Home() {
  return (
    <>
      {/* <Navbar />
        <Hero />
        <Video />
        <Instagram /> */}
      <nav>
        <div className="container mx-auto my-5">
          <div className="flex justify-between">
            <div className="flex">
              <p className="mr-10">contact@ponetteprod.com</p>
              <p>07 66 73 26 43</p>
            </div>
            <div className="flex justify-end">
              <a
                href="https://www.facebook.com/ponette.prod/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/ponette_prod/"
                target="_blank"
                rel="noreferrer"
              >
                <GrInstagram className="ml-3" />
              </a>
            </div>
          </div>
        </div>
        <hr className=""></hr>
        <div className="flex justify-between md: relative">
          <div className="little-logo-color">
            <div className="little-logo md: absolute md: left-20 md: top-5 pl-1 pr-4 py-1">
              <div className="">
                <strong className="">Ponette</strong>
              </div>
              <div className="text-start">
                <strong className="">prod.</strong>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-end md:items-baseline md:my-10 mr-11 md: md:absolute md: right-0 md: top-0">
            <p className="mr-3">Accueil</p>
            <p className="mr-3">A propos</p>
            <p className="mr-3">Savoir-faire</p>
            <p className="mr-3">Portfolio</p>
            <p className="mr-3">Nos client(e)s</p>
            <p className="mr-3">F.A.Q.</p>
            <p className="mr-3">Plus</p>
            <button className="btn-primary text-center" id="">
              Demander un devis
            </button>
          </div>
        </div>
      </nav>

      <div className="flex hero justify-center items-center">
        <div className="big-logo pl-1 pr-4 py-1 text-8xl">
          <div>
            <strong>Ponette</strong>
          </div>
          <div className="">
            <div className="">
              <strong>Prod.</strong>
            </div>
          </div>
        </div>
        <div className="ml-5 text-2xl">
          <p>contenus</p>
          <p>communication</p>
          <p>social media</p>
        </div>
      </div>
    </>
  );
}
