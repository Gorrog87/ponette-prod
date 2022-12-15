import "../assets/hero.css";
import "../assets/navbar.css";

export default function Hero() {
  return (
    <>
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
