import React from 'react';

const ShoppingCart = (props) => (
  <section>
    <p>Shopping Cart</p>
    <ul>
      { props.items.map((item, index) => (
        <li key={index}>
          {item}
          <button>X</button>
        </li>
      )) }
    </ul>
  </section>
);

export default ShoppingCart;