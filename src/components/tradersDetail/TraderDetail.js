import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './TraderDetail.module.scss';
import { Link } from 'react-router-dom'

function TraderDetail() {
  const { traderId } = useParams();

  const traders = {
    trader1: {
      name: "Lewis Pell",
      alias: "Handshake",
      imageUrl: "/images/traders/trader1.webp",
      sell: "Sells: Helmets, Glasses, Hats, Headphones, Plate Carriers, Vests, Backpacks, Belts, Tactical Rigs and Tools.",
      buy: "Buys: Helmets, Glasses, Hats, Headphones, Plate Carriers, Vests, Backpacks, Belts, Tactical Rigs, Tools and Secure Lockboxes.",
      quests: [
        {id: 1, name: "First Recon"},
        {id: 2, name: "Little Bird Down"},
        {id: 3, name: "Restoring Order"},
        {id: 4, name: "Rat's Nest"},
        {id: 5, name: "Helping Hand"},
        {id: 6, name: "Radio Silence"},
        {id: 7, name: "First Hit"},
        {id: 8, name: "True Grit"},
        {id: 9, name: "The Shadow over Ban Pa"},
        {id: 10, name: "Shooting Gallery"},
        {id: 11, name: "Up to Snuff"},
        {id: 12, name: "One Shot, One Kill"},
        {id: 13, name: "Manifest Destiny"},
        {id: 14, name: "Rebel Scum"}

      ]
    },
    trader2: {
      name: "Anton Jackson",
      alias: "Gunny",
      imageUrl: "/images/traders/trader2.webp",
      sell: 'Sells: Primary Weapons, Secondary Weapons, Ammunition, Magazines, Weapon parts, Attachments, Throwables and Tools. Specifically specializing in NATO variant weapons Also Sellss 5.56 ammo types',
      buy: "Buys: Primary Weapons, Secondary Weapons, Ammunition, Magazines, Weapon parts, Attachments, Throwables and Tools.."
    },
    trader3: {
      name: "Unknown",
      alias: "Lab Rat",
      imageUrl: "/images/traders/trader3.webp",
      sell: "Sells: Medkits, Medication, Drinks, Food and Tools.",
      buy: "Buys: Medkits, Medication, Drinks, Food and Tools."
    },
    trader4: {
      name: "Laya Hoang",
      alias: "Artisan",
      imageUrl: "/images/traders/trader4.webp",
      sell: "Sells: Primary Weapons, Secondary Weapons, Ammunition, Magazines, Weapon parts, Attachments, Throwables and Tools. Specifically specializing in AK and Eastern weapon variants. Also sells 7.62 ammo types",
      buy: "Buys: Primary Weapons, Secondary Weapons, Ammunition, Magazines, Weapon parts, Attachments, Throwables and Tools."
    },
    trader5: {
      name: "Unknown",
      alias: "Turncoat",
      imageUrl: "/images/traders/trader5.webp",
      sell: "Sells: AK74 Variants, SKS, 5.45 AK Attachments, Helmets, Poison.",
      buy: "Buys: Weapons, Ammunition and Magazines, Weapon parts, Helmets."
    },
    trader6: {
      name: "James Miller",
      alias: "Banshee",
      imageUrl: "/images/traders/trader6.webp",
      sell: "Sells: Unknown.",
      buy: "Buys: Weapons, Ammunition and Magazines, Weapon parts, Containers."
    },
  };

  const trader = traders[traderId];

  return (
    <div className={styles.traderContainer}>
      <h1>{trader.name}</h1>
      <h2>Alias {trader.alias}</h2>
      <img src={trader.imageUrl} alt={`${trader.name} alias ${trader.alias}`} />
      <p className={styles.sellInfo}>{trader.sell}</p>
      <p className={styles.buyInfo}>{trader.buy}</p>
      <div className={styles.quests}>
        <h3>Quests Available:</h3>
        <ul>
            {trader.quests.map(quest => (
              <li key={quest.id}>
                  <Link to={`/quests/${quest.id}`}>{quest.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default TraderDetail;
