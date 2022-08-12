import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  // console.log(movies);
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link state={location} to={`/movies/${id}`}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  title: PropTypes.string,
};
