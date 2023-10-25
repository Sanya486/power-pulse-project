import React from 'react';
import { Link } from 'react-router-dom';
import css from './Subtext.module.scss';
import PropTypes from 'prop-types';

const Subtext = ({ page }) => {
  let cssClass = '';

  switch (page) {
    case 'signIn':
      cssClass = css.signIn;
      break;
    case 'signUp':
      cssClass = css.signUp;
      break;
    case 'userPage':
      cssClass = css.userPage;
      break;
    default:
      cssClass = '';
      break;
  }

  return (
    <>
      {page === 'signIn' && (
        <p className={cssClass}>
          Don’t have an account?{' '}
          <Link to='signup' className={css.link}>
            Sign Up
          </Link>
        </p>
      )}
      {page === 'signUn' && (
        <p className={cssClass}>
          Already have account?{' '}
          <Link to='signin' className={css.link}>
            Sign In
          </Link>
        </p>
      )}
      {page === 'userPage' && <p className={cssClass}>User</p>}
    </>
  );
};

Subtext.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Subtext;
