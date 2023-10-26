import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './WelcomePage.module.scss';
import TitleMain from 'components/TitleMain/TitleMain';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import StatisticsInfo from 'components/StatisticsInfo/StatisticsInfo';
// import PropTypes from 'prop-types'

const WelcomePage = () => {
  const navigate = useNavigate();

  const redirectToSignUp = () => {
    navigate('/signup');
  };

  const redirectToSignIn = () => {
    navigate('/signin');
  };

  return (
    <Container>
      <TitleMain />
      <div className={css.buttonWrapper}>
        <Button
          title='Sign Up'
          styled='accent'
          classes={['accentButton']}
          onClick={redirectToSignUp}
        />
        <Button
          title='Sign In'
          styled='transparent'
          classes={['transparentButton']}
          onClick={redirectToSignIn}
        />
      </div>
      <div className={css.statisticsInfoPosition}>
        <StatisticsInfo />
      </div>
    </Container>
  );
};

// WelcomePage.propTypes = {

// }

export default WelcomePage;
