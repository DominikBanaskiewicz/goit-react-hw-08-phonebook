import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * - If the route is restricted and the user is logged in, render the component
 * - Otherwise render <Login>
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
