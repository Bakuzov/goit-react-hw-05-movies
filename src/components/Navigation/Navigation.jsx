import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <header className={s.headerContainer}>
      <nav>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.active}` : s.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.active}` : s.navLink
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
