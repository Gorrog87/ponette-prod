import "../assets/video.css";
import "../assets/hero.css";

export default function Videos(){
    return(
        <>
        <div className="video">
            <iframe src="https://youtu.be/MiQyB7XWXMQ" loading="lazy">Lire la video</iframe>
        </div>
        <div className="video-instagram-transition"></div>
        </>
    );
}