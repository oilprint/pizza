import { Link } from 'react-router-dom';
import { Logo } from '../../assets/images';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__top}>
          <ul className={styles.footer__links}>
            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="#" target="_blank">
                instagram
              </a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="#" target="_blank">
                facebook
              </a>
            </li>
          </ul>
          <Link className={styles.logo}>
            <img
              src={Logo}
              alt="Logo Pizzeria"
              className={styles.logo__img}
              width={100}
              height={63}
            />
          </Link>
          <div className={styles.footer__links}>
            <a className={styles.footer__link} href="mailto:mypizza@gmail.com" target="_blank">
              mypizza@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className="footer__detail">© 2023. All rights reserved</div>
          <Link to="/Terms" className={styles.footer__linkSmall}>
            Terms
          </Link>
          <Link to="/ Privacy" className={styles.footer__linkSmall}>
            {' '}
            Privacy{' '}
          </Link>
        </div>
        <a
          className={styles.footer__linkSmall}
          href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=kozlova.ux@gmail.com"
          target="_blank">
          created by kozlova.ux
        </a>
      </div>
    </footer>
  );
};

export default Footer;
