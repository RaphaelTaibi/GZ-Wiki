// src/context/FactionContext.js
import React, { createContext, useContext, useState } from 'react';

const FactionContext = createContext();

export const useFaction = () => useContext(FactionContext);

export const FactionProvider = ({ children }) => {
    const [faction, setFaction] = useState('none');

    return (
        <FactionContext.Provider value={{ faction, setFaction }}>
            {children}
        </FactionContext.Provider>
    );
};
