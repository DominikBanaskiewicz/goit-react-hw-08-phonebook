import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selector';

export const AuthNav = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div>
      {!isLoggedIn && (
        <>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
          <NavLink className={css.link} to="/login">
            Log In
          </NavLink>
        </>
      )}

      {isLoggedIn && (
        <>
          <span>{user.name} Contacts List</span>
          <NavLink onClick={handleLogOut} className={css.link} to="/logout">
            Logout
          </NavLink>
        </>
      )}
    </div>
  );
};
