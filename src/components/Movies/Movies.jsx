import React from 'react';
import styles from './Movies.module.css';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import trend1 from '../../assets/img/trend1.jpg';
import trend2 from '../../assets/img/trend2.jpg';
import trend3 from '../../assets/img/trend3.jpg';
import trend4 from '../../assets/img/trend4.jpg';
import trend5 from '../../assets/img/trend5.jpg';
import trend6 from '../../assets/img/trend6.jpg';

const Movies = () => {
  return (
    <div className={styles.container}>
      <h2>
        Trending Now
        <ChevronRightIcon />
      </h2>
      <div className={styles.movies}>
        <div className={styles.movie}>
          <img src={trend1} alt='trend1' />
        </div>
        <div className={styles.movie}>
          <img src={trend2} alt='trend2' />
        </div>
        <div className={styles.movie}>
          <img src={trend3} alt='trend3' />
        </div>
        <div className={styles.movie}>
          <img src={trend4} alt='trend4' />
        </div>
        <div className={styles.movie}>
          <img src={trend5} alt='trend5' />
        </div>
        <div className={styles.movie}>
          <img src={trend6} alt='trend6' />
        </div>
      </div>
    </div>
  );
};

export default Movies;
