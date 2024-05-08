import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import quests from "../../data/quest";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import traders from "../../data/traders";
import { useFaction } from "../../context/FactionContext";
//import styles from "./QuestDetail.module.scss";

function QuestDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const isCommon = pathSegments[1] === "common";
  const { faction } = useFaction();
  const questId = parseInt(pathSegments[pathSegments.length - 1], 10);

  let questData;

  if (isCommon) {
    questData = quests.common.find((q) => q.id === questId);
  } else {
    questData = quests.specific[faction]?.find((q) => q.id === questId);
  }

  if (!questData) {
    console.error("Quest not found or missing faction", faction, questId);
    navigate("*");
    return <p>Quest or data not found.</p>;
  }

  const traderKey = Object.keys(traders).find(
    (key) => traders[key].alias.toLowerCase() === questData.trader.toLowerCase()
  );

  const navigateSafely = (url) => {
    if (url) {
      navigate(url);
    } else {
      navigate("*");
    }
  };

  const goToFaction = () => {
    navigateSafely(`/faction/${faction}`);
  };
  const goToNextQuest = () => {
    if (questId + 1 <= 16) {
      navigateSafely(`/quests/faction/${faction}/${questId + 1}`);
    } else if (questId + 1 > 16) {
      navigateSafely(`/quests/common/${questId + 1}`);
    }
  };
  const goToBackQuest = () => {
    if (questId > 17) {
      navigateSafely(`/quests/common/${questId - 1}`);
    } else if (questId > 1) {
      navigateSafely(`/quests/faction/${faction}/${questId - 1}`);
    } else {
      goToFaction();
    }
  };

  const goToTrader = () => {
    navigateSafely(traderKey ? `/traders/${traderKey}` : null);
  };

  return (
    <div className="flex flex-col items-center mt-16 mb-16 mx-auto p-5 bg-neutral-500 rounded-lg shadow-md max-w-4xl ">
      <h2 className="text-gray-800 text-2xl font-extrabold mb-3">
        Détails de la Quête
      </h2>
      <p className="font-semibold text-lg text-gray-800">Faction: {faction}</p>
      <div className="text-white flex flex-col items-center">
        <p>{questData.name}</p>
        <p>{questData.description}</p>
        <p>{questData.requirement}</p>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        {questData.images?.map((img, index) => (
          <LazyLoadImage
            key={index}
            src={img}
            alt={`Image ${index + 1} for ${questData.name}`}
            effect="blur"
            className="w-full max-w-xs rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
          />
        ))}
      </div>
      <div className="flex justify-around w-full mt-5">
        <button
          onClick={goToBackQuest}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={goToFaction}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Faction
        </button>
        <button
          onClick={goToTrader}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Trader
        </button>
        <button
          onClick={goToNextQuest}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestDetail;
