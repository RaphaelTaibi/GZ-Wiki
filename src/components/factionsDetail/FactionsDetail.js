import React, { useContext } from 'react';
import styles from './FactionDetail.module.scss';
import { useParams, useNavigate, Link } from 'react-router-dom';

import quests from '../../data/quest'; // Assurez-vous que le chemin vers vos données de quête est correct
import FactionContext from '../../context/FactionContext';

function FactionDetail() {
    let { factionId } = useParams();
    console.log(factionId);
    const { resetFaction } = useContext(FactionContext);
    const navigate = useNavigate();

    const factionQuests = quests.specific[factionId.toLowerCase()] || [];
    const commonQuests = quests.common || [];
  
   


    const handleReset = () => {
        resetFaction();  // Réinitialiser la faction à 'none'
        navigate('/quests');  // Rediriger l'utilisateur vers la page des quêtes <Link to={`/quests/${factionId}/${quest.id}`}>{quest.name}</Link>
    
    };

    return (
        <div className={styles.factionContainer}>
            <h1>Faction: {factionId}</h1>
            <h2>Specific Quests</h2>
            <ul>
                {factionQuests.map((quest, index) => (
                    <li key={index}>
                        <Link to={`/quests/${factionId}/${quest.id}`}>{quest.name}</Link>
                    </li>
                ))}
            </ul>
            <h2>Common Quests</h2>
            <p corlor="yellow">Task are same Locatation for ALL Faction</p>
            <ul>
                {commonQuests.map((quest, index) => (
                    <li key={index}>
                        <Link to={`/quests/common/${quest.id}`}>{quest.name}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={handleReset}>Reset Faction Selection</button>
        </div>
    );
}

export default FactionDetail;
