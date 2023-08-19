import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="/">
              <img src="path/to/logo.png" alt="Мозок" />
            </a>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Довідка</h4>
              <ul>
                <li><a href="/about">Про нас</a></li>
                <li><a href="/contact">Контакти</a></li>
                <li><a href="/services">Послуги</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Допомога</h4>
              <ul>
                <li><a href="/faq">Питання та відповіді</a></li>
                <li><a href="/terms">Умови використання</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
