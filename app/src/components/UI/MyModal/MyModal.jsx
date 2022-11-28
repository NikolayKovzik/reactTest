import React from 'react'
import styles from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
  const classes = [styles.myModal]

  if (visible) {
    classes.push(styles.active);
  }

  return (
    <div className={classes.join(' ')} onClick={() => { setVisible(false) }}>
      <div className={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal