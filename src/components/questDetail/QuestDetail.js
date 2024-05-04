import React from 'react';
import { useParams } from 'react-router-dom';

function QuestDetail() {
  let { faction, questId } = useParams();

  return (
    <div>
      <h2>Détails de la Quête</h2>
      <p>Faction: {faction}</p>
      <p>ID de la Quête: {questId}</p>
      {/* Ajouter plus de détails ici */}
    </div>
  );
}

export default QuestDetail;
