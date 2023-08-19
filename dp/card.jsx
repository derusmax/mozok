import React from 'react';

function Content() {
  return (
    <div className="content">
      <div className="banner">
        <div className="info-card">
          <h3>Про нас</h3>
          <p>Дізнайтеся більше про нашу компанію</p>
          <a href="#">Детальніше</a>
        </div>
   
      </div>
      <div className="consultation">
        <h2>Запис на консультацію</h2>
        <form action="#" method="post">
          <input type="text" id="name" name="name" placeholder="Ім'я" required />
          <input type="tel" id="phone" name="phone" placeholder="Телефон" required />
          <button type="submit">Записатися</button>
        </form>
      </div>
    </div>
  );
}

export default Content;
