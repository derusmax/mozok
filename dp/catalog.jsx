import React from 'react';

function CatalogMenu() {
  return (
    <nav className="catalog-menu">
      <div className="catalog">
        <button className="toggle-categories">Каталог товаров</button>
        <div className="categories">
          <a className="category" href="/category1">
            <img src="path/to/category1.png" alt="Категория 1" />
            <h3>Комплектуючі для ПК</h3>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default CatalogMenu;
