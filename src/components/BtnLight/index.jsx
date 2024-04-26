import styles from './BtnLight.module.scss';

const index = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.btnSmall} ${styles.btnLight}`}>
      {icon}
    </button>
  );
};

export default index;
