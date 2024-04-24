import styles from './BtnSmall.module.scss';

const index = ({ icon }) => {
  return <button className={styles.btnSmall}>{icon}</button>;
};

export default index;
