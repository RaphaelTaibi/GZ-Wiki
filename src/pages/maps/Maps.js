import React from 'react';
import styles from './Maps.module.scss';
import MapDetail from '../../components/mapDetail/MapDetail';

function Maps() {
  return (
    <div className={styles.mapsContainer}>
      <MapDetail />
      <h2 className={styles.title}>Maps and Landing zones</h2>
      <img className={styles.mapImage} src="/images/map/Lamang_Island.webp" alt="Maps and all landing zones" />
    </div>
  );
}

export default Maps;
