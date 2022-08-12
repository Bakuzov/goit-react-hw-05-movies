import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../fetchApi';

export const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(res => setCast(res));
  }, [movieId]);

  if (cast) {
    return (
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              width="100"
              src={`https://image.tmdb.org/t/p/w500/` + profile_path}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    );
  }
};
