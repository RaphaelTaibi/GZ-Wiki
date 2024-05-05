import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Quests.module.scss';

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
        <div>
            <h1>Quêtes</h1>
            {selectedFaction ? (
                // Affiche le détail de la faction sélectionnée
                <div>
                    <h2>{selectedFaction.toLowerCase()} Faction - Quests</h2>
                    {Array.from({ length: 65 }, (_, index) => (
                        <Link key={index} to={`/quests/${selectedFaction}/quest${index + 1}`}>
                            {selectedFaction.toLowerCase()} Faction - Quest {index + 1}
                        </Link>
                    ))}
                    <button onClick={resetFaction}>Reset Faction</button>
                </div>
            ) : (
                // Affiche les options initiales de faction et de trader
                <div>
                    <div className={styles.factionContainer}>
                        <Link to="/crimson" onClick={() => handleSelectFaction('crimson')}>
                            <img className={styles.factionLogo} src='/images/factions/crimson_logo.webp' alt='crimson Faction Logo'/>
                        </Link>
                        <Link to="/lamang" onClick={() => handleSelectFaction('lamang')}>
                            <img className={styles.factionLogo} src='/images/factions/Lamang_logo.webp' alt='Lamang Faction Logo'/>
                        </Link>
                        <Link to="/mithras" onClick={() => handleSelectFaction('mithras')}>
                            <img className={styles.factionLogo} src='/images/factions/Mithras_logo.webp' alt='Mithras Faction Logo'/>
                        </Link>
                    </div>
                    <div className={styles.traderImages}>
                        {Array.from({ length: 6 }, (_, index) => (
                            <Link key={index} to={`/traders/trader${index + 1}`}>
                                <img src={`/images/traders/trader${index + 1}.webp`} alt={`Trader ${index + 1}`} />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quests;
