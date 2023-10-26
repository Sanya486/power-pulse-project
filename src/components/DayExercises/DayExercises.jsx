import React from 'react';
import css from './DayExercises.module.scss';
import { selectDiaryExercises } from 'redux/selectors';
import { useSelector } from 'react-redux';
import ExercisesTable from 'components/ExercisesTable/ExercisesTable';
import { Link } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';


const DayExercises = () => {

  const exercises = useSelector(selectDiaryExercises);

  if (exercises.length === 0) {
    return (
      <div className={css.bodybox}>
        <div className={css.container}>
          <h3 className={css.exercisesepmty}>Not found exercises</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className={css.bodybox}>
        <div className={css.container}>
          <h2 className={css.exercisetitle}>Execrcises</h2>
          <Link to='/exercises' className={`${css.addexercisetitle} ${css.linkStyles}`}>
            Add exercises
            <svg className={css.iconarrow}>
              <use href={sprite + '#arrow_add_icon'}></use>
            </svg>
          </Link>
        </div>
        <ExercisesTable />
      </div>
    );
  }
};

export default DayExercises;
