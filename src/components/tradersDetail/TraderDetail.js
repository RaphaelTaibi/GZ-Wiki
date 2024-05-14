import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import quests from "../../data/quest";
import traders from "../../data/traders";
import FactionCarousel from "../caroussel/FactionCarousel";

function TraderDetail() {
  const { traderId } = useParams();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);
  const [trader, setTrader] = useState(null);

  useEffect(() => {
    if (!traderId || traderId.trim() === "") {
      console.error("No traderId provided");
      setIsValid(false);
      navigate("/404");
      return;
    }

    const traderIndex = traderId.replace("trader", "");
    const validId = parseInt(traderIndex, 10);
    const traderKey = `trader${validId}`;

    if (
      !validId ||
      validId < 1 ||
      validId > 6 ||
      !traders[traderKey]
    ) {
      console.error(
        "Invalid traderId or no trader found for this ID:",
        traderId
      );
      setIsValid(false);
      navigate("/404");
    } else {
      setTrader(traders[traderKey]);
    }
  }, [traderId, navigate]);

  if (!isValid || !trader) {
    return null;
  }

  const allFactionsQuests = Object.values(quests.specific).flat();
  const traderFactionQuests = allFactionsQuests.filter(
    (quest) => quest.trader === trader.alias
  );
  const commonQuests = Object.values(quests.common).flat();
  const traderCommonQuests = commonQuests.filter(
    (quest) => quest.trader === trader.alias
  );

  return (
    <div className="flex flex-col items-center p-5 ">
      <div className="bg-neutral-500 shadow-lg rounded-lg w-1/2">
      <h1 className="text-center font-bold text-2xl">{trader.name}</h1>
      <h2 className="text-center font-semibold text-2xl">
        Alias {trader.alias}
      </h2>
      <img
        src={trader.imageUrl}
        alt={`${trader.name} alias ${trader.alias}`}
        className="w-4/5 max-w-xs md:max-w-lg lg:max-w-xl mx-auto my-5 rounded-lg border-2 border-gray-300"
      />
      <div className="bg-neutral-700 rounded-md m-8 border-frame border shadow-sm space-y-4 py-2 text-center text-white/75">
      <p className="text-center max-w-4/5 mx-auto mb-2 text-lg">
        {trader.sell}
      </p>
      <p className="text-center max-w-4/5 mx-auto mb-2 text-lg">{trader.buy}</p>
      </div>
      <div className="text-center mt-5">
        <h3 className="text-3xl font-bold underline p-5">Quests Available:</h3>
        <ul className="list-none p-0 space-y-4">
          {traderFactionQuests.map((quest, index) => (
            <li key={index} className="py-1">
              <FactionCarousel questId={quest.id} questName={<p className="underline">{quest.name}</p>} />
            </li>
          ))}
          <p className="font-bold text-xl">
            !! Task are same coordinate and zone for ALL faction !! care you can
            have PVP
          </p>
          {traderCommonQuests.map((quest, index) => (
            <li key={index} className="py-1">
              <Link to={`/quests/common/${quest.id}`}>{quest.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default TraderDetail;
