import { Outlet } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard/MovieCard';

export const Details = () => {
  return (
    <div>
      <MovieCard />
      <Outlet />
    </div>
  );
};
