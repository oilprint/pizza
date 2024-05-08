import { useNavigate } from 'react-router-dom';

import styles from './CartEmpty.module.scss';

const CartEmpty = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      empty
      <button onClick={goBack} className="secondaryBtn">
        Back
      </button>
    </div>
  );
};

export default CartEmpty;
