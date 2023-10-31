import {Link, useParams} from 'react-router-dom';
import {useContext} from 'react';
import {LosSimpsonsContext} from '../context/LosSimpsonsContext';

const SingleChar = () => {
  const {id} = useParams();

  const {globalCharacters} = useContext(LosSimpsonsContext);

  return (
    <div>
      {globalCharacters.map((character) => {
        if (character._id === id) {
          return (
            <div
              key={character._id}
              className="flex flex-col items-center mx-auto mb-12 p-20 border-2 max-w-2xl rounded-lg border-yellow-500 bg-yellow-400 "
            >
              <h1 className="text-2xl mb-10">
                <span className="font-bold">Nombre: </span>
                {character.Nombre}
              </h1>
              <img
                className="w-[100px] object-contain mb-10"
                src={character.Imagen}
                alt={character.Nombre}
              />
              <div className="text-xl max-w-3xl">
                <p className="border-b-2 border-t-2 border-black mb-4">
                  <span className="font-bold">Ocupacion: </span>
                  {character.Ocupacion}.
                </p>

                <p>
                  {' '}
                  <span className="font-bold">Historia: </span>
                  {character.Historia}
                </p>
                <Link to="/">
                  <button className="w-40 h-12 mt-12 rounded-lg bg-yellow-500 hover:bg-yellow-600">
                    Atras
                  </button>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SingleChar;
