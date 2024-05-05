import React from 'react';
import styles from './QuestDetail.module.scss';
import { useLocation } from 'react-router-dom';
import quests from '../../data/quest'; // Assurez-vous que le chemin est correct
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function QuestDetail() {
    const location = useLocation(); // Utilisation de useLocation plutot que useParams du a un BUG de useParams
    const pathSegments = location.pathname.split('/').filter(Boolean); 
    
    // Supposons que l'URL soit de la forme "/quests/faction/questId"
    const faction = pathSegments[1];
    const questId = parseInt(pathSegments[2], 10);

    let questData;
    if (questId > 16) {
        questData = quests.common.find(q => q.id === questId);
    } else {
        questData = quests.specific[faction]?.find(q => q.id === questId);
    }

    if (!questData) {
        console.error('Quête non trouvée ou données de faction non disponibles:', faction, questId);
        return <p>Quête non trouvée ou données de faction non disponibles.</p>;
    }

    return (
        <div className={styles.questDetailContainer}>
            <h2>Détails de la Quête</h2>
            <p>Faction: {faction}</p>
            <p>{questData.name}</p>
            <p>{questData.description}</p>
            <div className={styles.imageContainer}>
                {questData.images?.map((img, index) => (
                    <LazyLoadImage
                        key={index}
                        src={img}
                        alt={`Image ${index + 1} for ${questData.name}`}
                        effect="blur"
                        className={styles.lazyLoadImageBackground}
                    />
            ))}
            </div>
        </div>
    );
}

export default QuestDetail;
