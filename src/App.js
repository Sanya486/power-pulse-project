import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.scss';
import React from 'react';

import Layout from 'components/Layout/Layout';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RestrictedRoute from 'components/Routes/RestrictedRoute';
import SignUpPage from 'pages/SignUpPape/SignUpPage';
import SignInPage from 'pages/SignInPage/SignInPage';
import PrivateRoute from 'components/Routes/PrivateRoute';
import DiaryPage from 'pages/DiaryPage/DiaryPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import ProductsPage from 'pages/ProductsPage/ProductsPage';
import ExercisesPage from 'pages/ExercisesPage/ExercisesPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route
            path='/signup'
            element={<RestrictedRoute component={<SignUpPage />} redirectTo='/diary' />}
          />
          <Route
            path='/signin'
            element={<RestrictedRoute component={<SignInPage />} redirectTo='/diary' />}
          />
          <Route
            path='/profile'
            element={<PrivateRoute component={<ProfilePage />} redirectTo='/signin' />}
          />
          <Route
            path='/diary'
            element={<PrivateRoute component={<DiaryPage />} redirectTo='/signin' />}
          />
          <Route
            path='/products'
            element={<PrivateRoute component={<ProductsPage />} redirectTo='/signin' />}
          />
          <Route
            path='/exercises'
            element={<PrivateRoute component={<ExercisesPage />} redirectTo='/signin' />}
          />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
