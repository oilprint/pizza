import styles from './BtnLight.module.scss';

const index = ({ icon }) => {
  return <button className={`${styles.btnSmall} ${styles.btnLight}`}>{icon}</button>;
};

export default index;
