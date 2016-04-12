import React from 'react';

export default function Reading() {
  return (
    <section className="hobbies">
      <div className="container">
        <div className="col-sm-7">
          <h2 className="hobbies__heading">CURRENLY READING</h2>
        </div>
        <div className="col-sm-5">
          <ul className="hobbies-list">
            <li className="hobbies-list__item hobbies-list__item--separate">
              <a href="http://javascriptplayground.com/the-refactoring-tales/refactoring-tales.html" target="_blank">The Refactoring Tales - Jack Franklin</a>
            </li>
            <li className="hobbies-list__item">
              <a href="http://shop.oreilly.com/product/0636920033141.do" target="_blank">Programming Javascript Applications - Eric Elliott</a>
            </li>
            <li className="hobbies-list__item hobbies-list__item--separate">
              <a href="http://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515/" target="_blank">Don't make me think - Steve Krug</a>
            </li>
            <li className="hobbies-list__item hobbies-list__item--separate">
              <a href="http://www.goodreads.com/book/show/5107.The_Catcher_in_the_Rye" target="_blank">The Catcher in the Rye - J.D. Salinger</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
