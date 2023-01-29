import React from 'react';
import styles from './Header.module.css';

import {
  MagnifyingGlassIcon,
  BellIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header>
      <div className={styles.left}>
        <a href='#' className={styles.logo}>
          FakeFlix
        </a>
        <ul className={styles.navbar}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#tv-shows'>TV Shows</a>
          </li>
          <li>
            <a href='#movies'>Movies</a>
          </li>
          <li>
            <a href='#latest'>Latest</a>
          </li>
          <li>
            <a href='#my-list'>My List</a>
          </li>
          <li>
            <a href='#my-list'>Browse by Languages</a>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <MagnifyingGlassIcon />
        <a href='#'>DVD</a>
        <BellIcon />
        <FaceSmileIcon />
      </div>
    </header>
  );
};

export default Header;
