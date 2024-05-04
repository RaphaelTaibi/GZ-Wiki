// src/components/Quests.js
import React from 'react';
import { useFaction } from '../../context/FactionContext';
import { Link } from 'react-router-dom';
import styles from './Quests.module.scss'; // Assurez-vous que le chemin est correct

function Quests() {
    const { faction, setFaction } = useFaction();

    const renderFactionQuests = () => {
        if (faction !== 'none') {
            return (
                <div className={styles.factionQuests}>
                    {Array.from({ length: 65 }, (_, index) => (
                        <Link key={index} to={`/quests/${faction}/quest${index + 1}`}>
                            {faction.toUpperCase()} Faction - Quest {index + 1}
                        </Link>
                    ))}
                </div>
            );
        } else {
            return (
                <div className={styles.traderImages}>
                    {Array.from({ length: 6 }, (_, index) => (
                        <Link key={index} to={`/traders/trader${index + 1}`}>
                            <img src={`/images/traders/trader${index + 1}.webp`} alt={`Trader ${index + 1}`} />
                        </Link>
                    ))}
                </div>
            );
        }
    };

    return (
        <div>
            <h1>Quêtes</h1>
            {renderFactionQuests()}
            <div>
                <button onClick={() => setFaction('a')}>Faction A</button>
                <button onClick={() => setFaction('b')}>Faction B</button>
                <button onClick={() => setFaction('c')}>Faction C</button>
                <button onClick={() => setFaction('none')}>Reset</button>
            </div>
        </div>
    );
}

export default Quests;
