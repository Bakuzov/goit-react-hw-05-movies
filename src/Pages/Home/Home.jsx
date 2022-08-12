import { useState, useEffect } from 'react';
import { MovieList } from '../../components/MovieList/MovieList';
import { trendingList } from '../../fetchApi';
import s from './HomePage.module.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    trendingList().then(({ results }) => setMovies(results));
  }, []);

  return (
    <section className={s.section}>
      <h1>Movies</h1>
      <MovieList movies={movies} />
    </section>
  );
};
