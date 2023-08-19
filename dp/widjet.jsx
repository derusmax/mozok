import React from 'react';

function Widget() {
  return (
    <div className="widget">
      <a href="/cart"><img src="path/to/cart.png" alt="Корзина" /></a>
      <a href="/favorites"><img src="path/to/heart.png" alt="Вподобане" /></a>
      <a href="/compare"><img src="path/to/compare.png" alt="Порівняти" /></a>
    </div>
  );
}

export default Widget;
