import React from "react";
//import styles from "./Maps.module.scss";
import MapDetail from "../../components/mapDetail/MapDetail";

function Maps() {
  return (
    <div className="flex flex-col items-center p-5 min-h-[80vh] mt-5">
      <MapDetail />
      <h2 className="mt-20 pb-5 text-center text-white font-extrabold text-3xl">Maps and Landing zones</h2>
      <img
        className="w-[90%] max-w-[1820px] h-auto shadow-lg my-5 md:max-w-[95%]"
        src="/images/map/Lamang_Island.webp"
        alt="Maps and all landing zones"
      />
    </div>
  );
}

export default Maps;
