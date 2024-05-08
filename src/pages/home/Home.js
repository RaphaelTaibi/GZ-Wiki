import React, { useState, useRef, useEffect } from "react";
//import backgroundImage from "../../assets/images/GrayZone.webp";
//import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const videoRef = useRef(null)

  const handleNavigation = () => {
    setAnimate(true);
    setTimeout(() => {
      navigate("/social");
    }, 300); // Assurez-vous que ce délai correspond à la durée de l'animation
  };

  useEffect(() => {
    // Assurez-vous que la vidéo recommence au début lorsque vous arrivez à la fin
    const handleEnd = () => {
      videoRef.current.play();
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('ended', handleEnd);

    return () => {
      videoElement.removeEventListener('ended', handleEnd);
    };
  }, []);

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center ${
        animate ? "opacity-0" : "opacity-100"
      } transition-opacity duration-500`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/video/GrayZone.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> {/* Overlay */}
      <div className="z-20 flex flex-col justify-between w-full h-full px-4 py-8 mt-auto">
        <div className="mt-20 mb-8 self-center">
          <div
            className="w-12 h-12 flex items-center justify-center bg-transparent hover:bg-gray-800 rounded-full cursor-pointer transform hover:scale-110 transition-all duration-300"
            onClick={handleNavigation}
          >
            <img
              src="/images/fleche.png"
              alt="Go to next page"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;