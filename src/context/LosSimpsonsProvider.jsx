import {useEffect, useState} from 'react';
import {LosSimpsonsContext} from './LosSimpsonsContext';

const LosSimpsonsProvider = ({children}) => {
  const [globalCharacters, setGlobalCharacters] = useState([]);

  // Get all characters API
  const getGlobalCharacters = async () => {
    const baseURL = 'https://apisimpsons.fly.dev/api/personajes';

    const res = await fetch(`${baseURL}?limit=650`);
    const data = await res.json();
    setGlobalCharacters(data.docs);
  };

  useEffect(() => {
    getGlobalCharacters();
  }, []);

  return (
    <LosSimpsonsContext.Provider
      value={{
        globalCharacters,
      }}
    >
      {children}
    </LosSimpsonsContext.Provider>
  );
};

export default LosSimpsonsProvider;
