import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../fetchApi';
import { useParams, NavLink, useNavigate, useLocation } from 'react-router-dom';
import s from './MovieCard.module.css';

export const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state.pathname + location.state.search);

  useEffect(() => {
    getMovieDetails(movieId).then(res => setMovie(res));
  }, [movieId]);
  if (movie) {
    return (
      <section>
        <button
          className={s.btn}
          type="button"
          onClick={() =>
            navigate(location?.state?.pathname + location?.state?.search ?? '/')
          }
        >
          Go back
        </button>
        <div className={s.card}>
          <img
            width="300"
            src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
            alt={movie.original_title}
          />
          <div>
            <h2>{movie.original_title}</h2>
          </div>
        </div>
        <div className={s.listLink}>
          <NavLink
            state={location.state}
            className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.active}` : s.navLink
            }
            to={`cast`}
          >
            Cast
          </NavLink>
          <NavLink
            state={location.state}
            className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.active}` : s.navLink
            }
            to={`reviews`}
          >
            Reviews
          </NavLink>
        </div>
      </section>
    );
  }
};
