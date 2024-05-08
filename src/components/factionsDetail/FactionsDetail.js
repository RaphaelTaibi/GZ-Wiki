import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import quests from "../../data/quest"; 
import { useFaction } from "../../context/FactionContext";
import { getFactionData } from "../../service/factionService";


function FactionDetail() {
  const { factionId } = useParams();
  const { setFaction, resetFaction } = useFaction();
  const navigate = useNavigate();

  const [factionInfo, setFactionInfo] = useState({});
  const factionQuests = quests.specific[factionId?.toLowerCase()] || [];
  const commonQuests = quests.common || [];

  useEffect(() => {
    if (factionId && factionId.toLowerCase() !== "common") {
      setFaction(factionId);
      const data = getFactionData(factionId);
      if (data) {
        setFactionInfo(data);
      } else {
        console.error("Faction data not found");
        navigate("*");
      }
    }
  }, [factionId, navigate, setFaction]);
  console.log("Faction Detail:", {factionId});
  const handleReset = () => {
    resetFaction();
    navigate("/quests");
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-neutral-500 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold text-center">{factionInfo.name}</h1>
        <img src={`/images/factions/${factionId.toLowerCase()}.webp`} alt="Faction Logo" className="w-24 h-24 rounded-full" />
      </div>
      <div className="bg-neutral-600 p-3 shadow-sm mb-5 rounded-lg">
        <p className="text-white">{factionInfo.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-3">Specific Quests</h2>
          <ul className="list-none p-0">
            {factionQuests.map((quest, index) => (
              <li key={index} className="mb-2">
                <Link to={`/quests/faction/${factionId}/${quest.id}`} className="text-white hover:text-cyan-900 block">
                  {quest.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Common Quests</h2>
          <ul className="list-none p-0">
            {commonQuests.map((quest, index) => (
              <li key={index} className="mb-2">
                <Link to={`/quests/common/${quest.id}`} className="text-white hover:text-cyan-900 block">
                  {quest.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={handleReset} className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 absolute right-5 bottom-5">
        Reset Faction Selection
      </button>
    </div>
  );
}

export default FactionDetail;
