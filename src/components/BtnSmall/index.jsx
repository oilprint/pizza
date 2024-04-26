import styles from './BtnSmall.module.scss';

const index = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btnSmall}>
      {icon}
    </button>
  );
};

export default index;
