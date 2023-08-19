import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <a href="/">
              <img src="path/to/logo.png" alt="Mozok" />
              <span className="company-name">Мозок</span>
            </a>
          </div>
          <nav className="nav">
            <a href="/">Головна</a>
            <a href="/services">Сервісний центр</a>
          </nav>
        </div>
        <div className="header-bottom">
        </div>
      </div>
    </header>
  );
}

export default Header;
