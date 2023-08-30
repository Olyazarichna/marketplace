import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface BackdropProps {
  children: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  return <div className={styles.backdrop}>{children}</div>;
};

export default Backdrop;

