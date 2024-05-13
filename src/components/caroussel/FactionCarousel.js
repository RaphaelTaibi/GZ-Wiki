import React from "react";
import { useNavigate } from "react-router-dom";
import { useFaction } from "../../context/FactionContext";


const FactionCarousel = ({ questId, questName }) => {
  const navigate = useNavigate();
 const { setFaction } = useFaction();
  const factions = [
    {
      id: "crimson",
      name: "Crimson",
      logo: "/images/factions/crimson.webp",
    },
    { id: "lamang",
     name: "Lamang",
      logo: "/images/factions/lamang.webp" },
    {
      id: "mithras",
      name: "Mithras",
      logo: "/images/factions/mithras.webp",
    },
  ];
  const handleSelectFaction = (factionId) => {
    navigate(`/quests/faction/${factionId}/${questId}`);
    setFaction(factionId)
  };

  return (
    <div>
      <p className="text-center text-lg font-medium">{questName}</p>
      <div className="flex justify-center items-center mt-5">
        {factions.map((faction) => (
          <div
            key={faction.id}
            className="cursor-pointer transition-transform duration-300 ease-in-out m-2 p-3 bg-black rounded-lg flex justify-center items-center hover:scale-110  w-32 h-32"
            onClick={() => handleSelectFaction(faction.id)}
          >
            <img
              src={faction.logo}
              alt={faction.name}
              className="max-w-full max-h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactionCarousel;
