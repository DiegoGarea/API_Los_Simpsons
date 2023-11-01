import {useContext} from 'react';
import {LosSimpsonsContext} from '../context/LosSimpsonsContext';
import {useParams, Link} from 'react-router-dom';

const SearchChar = () => {
  const {globalCharacters} = useContext(LosSimpsonsContext);

  const {name} = useParams();

  const results = globalCharacters.filter((character) => {
    return character.Nombre.toLowerCase().includes(name.toLowerCase());
  });

  return (
    <div className="grid sm:grid-cols-5 grid-cols-2 grid-rows-100 gap-4 mb-48 max-w-6xl mx-auto mt-12 ">
      {results.map((character) => (
        <Link key={character._id} to={`/character/${character._id}`}>
          <div className=" flex flex-col items-center bg-yellow-500 rounded-xl hover:bg-yellow-600">
            <img
              className="object-contain h-[200px]"
              src={character.Imagen}
              alt={character.Nombre}
            />
            <h1>{character.Nombre}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchChar;
