import React from 'react';
import styles from './MapDetail.module.scss';

function MapDetail() {
  return (
    <div className={styles.mapContainer}>
      <h1>History of Lamang Island</h1>
      <h2>Name: Lamang</h2>
      <p>Official country name: The Democratic Republic of Lamang</p>
      <p>Location: Somewhere in Southeast Asia</p>
      <p>Area: 430km²</p>
      <p>Population: 74,470</p>
      <p>President: Narith Sayavong</p>
      <p>Official languages: Lao and English</p>
      <p>Area of operations: 42km²</p>
      
      <h2>History</h2>
      <p>A former British colony, Lamang was ravaged by a brutal civil war just two decades after gaining its independence when the remnants of the anti-British resistance (known as SOL - Sons of Lamang) were dissatisfied with the independent government's rule. Since the official army was understaffed, untrained, and equipped with outdated weapons and gear, it was swiftly defeated after only a couple of months of fighting. The SOL commander, Raksmei Sayavong, then declared himself the supreme leader of the island with the title of President.</p>
      <p>Raksmei's victory was made possible thanks to the help of the Soviets, who supplied the SOL with weapons in exchange for strengthening their position during the Vietnam War. Building various military installations all over Lamang, a small contingent of Soviet troops remained on the island even after the end of the conflict and finally left after the dissolution of the Soviet Union in 1991.</p>
      <p>Raksmei Sayavong died in 1996, with his only son, the 28-year-old Narith Sayavong, becoming the new leader of the island. Narith promised the people of Lamang that he would end his late father's isolationism policies and bring the island into the next millennium through modernization and openness. Claiming to focus on tourism, he ordered the construction of his crowning jewel - the Midnight Sapphire - a luxurious resort where, legend has it, all was allowed for the right price.</p>
      <p>During the next three decades, those few who managed to escape the island told a vastly different story and pleaded with the rest of the world for help until, finally, the UN decided to act and established the UNLRA (United Nations Lamang Relief Agency) to provide at least a modicum of assistance to the oppressed people. With Narith's hesitant approval, UNLRA arrived in Lamang to assess the situation and begin its humanitarian mission.</p>
      <p>Then, a few months later, a disaster struck. With a blinding flash and thunderous roar, a part of the island was forever transformed by a sudden cataclysmic event.</p>
    </div>
  );
}

export default MapDetail;
