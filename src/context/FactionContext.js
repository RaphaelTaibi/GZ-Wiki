// Context/FactionContext.js
import React, { createContext, useContext, useReducer } from 'react';

const FactionContext = createContext();
export const useFaction = () => useContext(FactionContext);
const initialState = {
  faction: 'none',
};

function factionReducer(state, action) {
  switch (action.type) {
    case 'SET_FACTION':
      return { ...state, faction: action.payload };
    case 'RESET_FACTION':
      return { ...state, faction: 'none' };
    default:
      return state;
  }
}

export const FactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(factionReducer, initialState);

  const setFaction = (faction) => dispatch({ type: 'SET_FACTION', payload: faction });
  const resetFaction = () => dispatch({ type: 'RESET_FACTION' });

  return (
    <FactionContext.Provider value={{ faction: state.faction, setFaction, resetFaction }}>
      {children}
    </FactionContext.Provider>
  );
};

export default FactionContext;
