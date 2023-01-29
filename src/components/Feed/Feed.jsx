import React from 'react';
import styles from './Feed.module.css';
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/outline';

const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.description}>
        <h1>Spider Man</h1>
        <p>
          Peter Parker returns to routine life as a high schooler until the
          Vulture's arrival gives him the chance to prove himself as a
          web-slinging superhero.
        </p>
        <div className={styles.actions}>
          <button>
            <PlayIcon />
            Play
          </button>
          <button className={styles.outline}>
            <InformationCircleIcon />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
