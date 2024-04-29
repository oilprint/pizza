import styles from './BtnSmall.module.scss';

const index = ({ icon, onClick, disabled }) => {
  return (
    <button onClick={onClick} className={styles.btnSmall} disabled={disabled}>
      {icon}
    </button>
  );
};

export default index;
