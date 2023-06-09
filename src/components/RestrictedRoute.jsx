import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PropTypes from 'prop-types';

/**
 * - If the route is restricted and the user is logged in, render the component
 * - Otherwise render <Login>
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
RestrictedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
