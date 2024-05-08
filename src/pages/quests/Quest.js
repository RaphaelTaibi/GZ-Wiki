import React, { useState } from "react";
import { Link } from "react-router-dom";
//import styles from "./Quests.module.scss";

function Quests() {
  const [selectedFaction, setSelectedFaction] = useState(null);

  // Handler pour sélectionner une faction
  const handleSelectFaction = (faction) => {
    setSelectedFaction(faction);
  };

  // Handler pour réinitialiser la sélection de la faction
  const resetFaction = () => {
    setSelectedFaction(null);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Quêtes</h1>
      {selectedFaction ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {selectedFaction.toLowerCase()} Faction - Quests
          </h2>
          {Array.from({ length: 65 }, (_, index) => (
            <Link
              key={index}
              to={`/quests/${selectedFaction}/quest${index + 1}`}
              className="block hover:scale-105 transition-transform"
            >
              {selectedFaction.toLowerCase()} Faction - Quest {index + 1}
            </Link>
          ))}
          <button
            onClick={resetFaction}
            className="mt-5 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Reset Faction
          </button>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap justify-around mt-10" >
            {["crimson", "lamang", "mithras"].map((faction) => (
              <Link
                key={faction}
                to={`/faction/${faction}`}
                onClick={() => handleSelectFaction(faction)}
                className="w-1/3 p-2 text-center hover:scale-105 transition-transform"
              >
                <img
                  src={`/images/factions/${faction}.webp`}
                  alt={`${faction} Faction Logo`}
                  className="object-contain w-40 h-40 mx-auto border-2  border-gray-300 hover:border-gray-500 mb-10"
                />
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-around mt-5 mb-11">
            {Array.from({ length: 6 }, (_, index) => {
              // Supposons que l'image du trader 6 est en jpg
              const imageFormat = index === 5 ? "jpg" : "webp";
              return (
                <Link
                  key={index}
                  to={`/traders/trader${index + 1}`}
                  className="w-1/3 p-2"
                >
                  <img
                    src={`/images/traders/trader${index + 1}.${imageFormat}`}
                    alt={`Trader ${index + 1}`}
                    className="object-contain border-2 border-gray-300 hover:border-gray-500 hover:scale-105 w-40 h-40 mx-auto mb-10 "
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quests;
