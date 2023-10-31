import {useState} from 'react';
import {Link} from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full flex justify-center placeholder-yellow-500 mb-12">
      <form onSubmit={handleSearchSubmit}>
        <input
          className="border-none focus:outline-none rounded-md placeholder:text-yellow-500 h-8 text-center text-yellow-700 placeholder:text-center"
          type="text"
          placeholder="Buscar Personaje"
          value={search}
          onChange={handleSearchChange}
        />
        <Link to={`search/find/${search}`}>
          <button
            type="submit"
            className="w-20 h-7 rounded-lg mx-4 bg-yellow-500 text-white"
            onClick={() => setSearch('')}
          >
            Buscar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
