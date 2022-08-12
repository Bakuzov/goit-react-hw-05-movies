import { useState, useEffect } from 'react';
import { searchMovie } from '../../fetchApi';
import { Serchbar } from '../../components/Searchbar/Searchbar';
import s from './MoviesPage.module.css';
import { MovieList } from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const query = searchParam.get('query');
  console.log(searchParam);

  useEffect(() => {
    if (query) {
      searchMovie({ query: query }).then(res => setMovies(res.results));
    }
  }, [query]);

  const handleSubmit = value => {
    setSearchParam({ query: value });
  };

  return (
    <section className={s.section}>
      <h2>Search</h2>
      <Serchbar onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </section>
  );
};
