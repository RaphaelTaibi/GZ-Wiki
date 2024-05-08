import React, { useState } from "react";
import TwitterWidget from "../twitter/TwitterWidget";
import VideoEmbed from "../vidéo/VideoEmbed";

function Article() {
  const videoIds = ["eQ9qT8rkxMM", "I8DyVR3bPG8"];
  const [language, setLanguage] = useState("EN"); // Corrected from useSate to useState

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "FR" : "EN"));
  };

  return (
    <div className="container mx-auto p-4 text-white">
      <div className="grid md:grid-cols-12 gap-4">
        {/* Conteneur pour les vidéos */}
        <div className="md:col-span-7">
          {videoIds.map((id) => (
            <div key={id} className="mb-4">
              <VideoEmbed videoId={id} />
            </div>
          ))}
        </div>

        {/* Conteneur pour le texte de bienvenue et les détails de la communauté */}
        <div className="md:col-span-5">
          {language === "EN" ? (
            <div>
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-3">
                  Welcome to the Gray Zone Warfare Wiki!
                </h1>
                <p>Dear adventurers,</p>
                <p>
                  Welcome to a space entirely dedicated to enriching your
                  experience in Gray Zone Warfare.
                </p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Detailed guides on each quest.</li>
                  <li>Explanations of protection and ballistic systems.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Join our dynamic community!
                </h2>
                <p>
                  This wiki is as much yours as it is ours. Every player,
                  whether a new recruit or a veteran, is welcome to contribute.
                  Together, let's build the best resource for all players of
                  Gray Zone Warfare!
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold mb-3">
                Bienvenue sur le Wiki de Gray Zone Warfare!
              </h1>
              <p>Chers aventuriers et aventurières,</p>
              <p>
                Bienvenue dans un espace dédié entièrement à enrichir votre
                expérience sur Gray Zone Warfare.
              </p>
              <ul className="list-disc ml-5 mt-2">
                <li>Guides détaillés sur chaque quête.</li>
                <li>
                  Explications sur les systèmes de protection et de balistique.
                </li>
              </ul>
              <h2 className="text-xl font-semibold mt-5 mb-2">
                Rejoignez notre communauté dynamique!
              </h2>
              <p>
                Ce wiki est le vôtre autant que le nôtre. Chaque joueur,
                nouvelle recrue ou vétéran, est bienvenu pour apporter sa pierre
                à l'édifice. Ensemble, construisons la meilleure ressource pour
                tous les joueurs de Gray Zone Warfare !
              </p>
            </div>
          )}
          <button
            onClick={toggleLanguage}
            className="mt-4 bg-transparent text-cyan-600 hover:text-cyan-900"
          >
            {language === "EN" ? "FR" : "EN"}
          </button>
        </div>

        {/* Widget Twitter */}
        <div className="md:max-h-[760px] overflow-auto md:col-span-full mt-9 max-w-[500px]">
          <TwitterWidget />
        </div>
      </div>
    </div>
  );
}

export default Article;
