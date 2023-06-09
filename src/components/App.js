import React from 'react';
import { AppBar } from './AppBar/AppBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';

export const App = () => {
  const RegisterPage = lazy(() => import('../pages/Register'));
  const LoginPage = lazy(() => import('../pages/Login'));
  const HomePage = lazy(() => import('../pages/Home'));
  const ContractsPage = lazy(() => import('../pages/Contacts'));
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Suspense>
      <div className="App">
        <AppBar />

        {isLoading && !error && <b>Request in progress...</b>}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContractsPage></ContractsPage>} />

          <Route path="/logout/*" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Suspense>
  );
};
