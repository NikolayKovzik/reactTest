import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '250px' }}>
      <div className={styles.loader}>

      </div>
    </div>
  );
};

export default Loader;