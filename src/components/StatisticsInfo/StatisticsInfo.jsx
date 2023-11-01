import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import css from './StatisticsInfo.module.scss';
import sprite from '../../images/svg/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStatistic } from 'redux/operations';
import { Puff } from 'react-loader-spinner';

// marginTopUp, marginTopIn, marginTopProfile
import { selectBurnedAllUsersCalories } from 'redux/selectors';
const StatisticsInfo = () => {
  //   const containerClass = `
  //   ${css.container}
  //   ${marginTopUp && css.marginTopUp}
  //   ${marginTopIn && css.marginTopIn}
  //   ${marginTopProfile && css.marginTopProfile}
  // `;
  const calories = useSelector(selectBurnedAllUsersCalories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStatistic());
  }, []);
  const location = useLocation();

  return (
    <>
      <div className={css.statist}>
        <div
          className={`${css.container} ${location.pathname === '/' && css.containerWelcomePage}`}
        >
          <div className={css.circle}>
            <svg className={css.play}>
              <use href={sprite + '#play_icon'}></use>
            </svg>
          </div>
          <div className={css.textGroup}>
            <p className={css.text1}>350+</p>
            <p className={css.text2}>Video tutorial</p>
          </div>
        </div>
        <div
          className={`${css.containerCal} ${
            location.pathname === '/' && css.containerCalWelcomePage
          }`}
        >
          {calories ? (
            <>
              <div className={css.circle2}>
                <svg className={css.icon}>
                  <use href={sprite + '#running_stick_figure_icon'}></use>
                </svg>
              </div>
              <div className={css.textGroup2}>
                <p className={css.quantity}>{calories}</p>
                <p className={css.cal}>cal</p>
              </div>
            </>
          ) : (
            <Puff
              height='100'
              width='100'
              color='#e6533c'
              ariaLabel='line-wave'
              wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
              }}
              wrapperClass=''
              visible={true}
              firstLineColor=''
              middleLineColor=''
              lastLineColor=''
            />
          )}
        </div>
      </div>
    </>
  );
};

export default StatisticsInfo;
