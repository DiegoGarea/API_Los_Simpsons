import {useContext, useState} from 'react';
import {LosSimpsonsContext} from '../context/LosSimpsonsContext';
import CharacterCard from './CharacterCard';

const Home = () => {
  const {globalCharacters} = useContext(LosSimpsonsContext);
  const [visibleCharacters, setVisibleCharacters] = useState(50);

  const showMoreCharacters = () => {
    setVisibleCharacters(visibleCharacters + 50);
  };

  return (
    <>
      <div className="grid sm:grid-cols-5 grid-cols-2 grid-rows-100 gap-4 max-w-6xl mx-auto ">
        {globalCharacters
          .slice(0, visibleCharacters)
          .map((character, index) => (
            <CharacterCard character={character} key={index} />
          ))}
      </div>
      {visibleCharacters < globalCharacters.length && (
        <div className="flex justify-center my-12 ">
          <button
            className="w-40 h-12 rounded-lg mx-4 bg-yellow-500  hover:bg-yellow-600"
            onClick={showMoreCharacters}
          >
            Cargar 50 mas
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
