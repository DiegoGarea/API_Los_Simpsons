import {Link} from 'react-router-dom';
import {lossimpsons} from '../assets';

const Navbar = () => {
  return (
    <Link to="/API_Los_Simpsons/">
      <div className="flex justify-center w-full h-44 my-5">
        <img className="" src={lossimpsons} alt="Los_Simpsons" />
      </div>
    </Link>
  );
};

export default Navbar;
