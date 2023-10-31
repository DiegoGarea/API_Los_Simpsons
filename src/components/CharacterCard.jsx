import {Link} from 'react-router-dom';

const CharacterCard = ({character}) => {
  return (
    <Link to={`/character/${character._id}`}>
      <div className=" flex flex-col items-center bg-yellow-500 rounded-xl hover:bg-yellow-600">
        <img
          className="object-contain h-[200px]"
          src={character.Imagen}
          alt={character.Nombre}
        />
        <h1>{character.Nombre}</h1>
      </div>
    </Link>
  );
};

export default CharacterCard;
