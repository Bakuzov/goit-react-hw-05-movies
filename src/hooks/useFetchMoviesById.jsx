import { getMovieDetails } from '../fetchApi';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

export const useFetchMoviesById = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setMovie(await getMovieDetails(movieId));
      } catch (error) {
        return 'Something went wrong...';
      }
    };
    getMovies();
  }, [movieId]);
  // console.log(movie);
  return movie;
};
