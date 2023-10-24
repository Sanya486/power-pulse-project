import React from 'react';
import { useState } from 'react';
import css from './User.module.scss';
import sprite from '../../images/svg/sprite.svg';
import Subtext from 'components/Subtext/Subtext';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectName } from 'redux/selectors';

const User = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const userName = useSelector(selectName);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  return (
    <div className={css.userWrapper}>
      <form className={css.form} onClick={() => document.querySelector('.fileInput').click()}>
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          className='fileInput'
          hidden
        />
        {selectedFile ? (
          <img src={selectedFile} className={css.imageSelected} />
        ) : (
          <svg className={css.avatarDefault}>
            <use href={sprite + '#avatar_icon'}></use>
          </svg>
        )}
        <label htmlFor='fileInput'>
          <svg className={css.iconToChooseFile}>
            <use href={sprite + '#check_mark_icon'}></use>
          </svg>
        </label>
      </form>
      <h3 className={css.userName}>{`${userName}`}</h3>
      <Subtext page='userPage' />
    </div>
  );
};

export default User;
