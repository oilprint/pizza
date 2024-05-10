import { useNavigate, useRouteError } from 'react-router-dom';

import { ErrorImg } from '../../assets/images';

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  let error = useRouteError();
  console.error(error);

  const goBack = () => navigate(-1);

  return (
    <section className={styles.errorPage}>
      <div className={styles.container}>
        <img
          className={styles.errorPage__img}
          src={ErrorImg}
          alt="Error"
          width={290}
          height={265}
          loading="lazy"
        />
        <h2 className={styles.errorPage__title}>Sorry, we couldn’t find this page</h2>
        <button className={`${styles.button} ${styles.errorPage__button}`} onClick={goBack}>
          Go Back
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
