import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { SinglePizza } from '../components';

const SingleItem = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://661b801e65444945d04f9c13.mockapi.io/items/' + id);

        setPizza(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPizza();
    console.log(pizza);
  }, []);

  if (!pizza) {
    return 'Loading.....';
  }

  return (
    <div>
      <p>{pizza.name}</p>

      <SinglePizza {...pizza} />
    </div>
  );
};

export default SingleItem;
