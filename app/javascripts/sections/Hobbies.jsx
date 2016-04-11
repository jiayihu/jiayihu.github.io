import React from 'react';

export default function Hobbies() {
  return (
    <section className="hobbies container">
      <div className="row">
        <div className="col-sm-7">
          <h2 className="hobbies__heading">I LOVE</h2>
        </div>
        <div className="col-sm-5">
          <ul className="hobbies-list">
            <li className="hobbies-list__item hobbies-list__item--separate">Being in motion.</li>
            <li className="hobbies-list__item">
              Meeting new people and talking about our interests.
            </li>
            <li className="hobbies-list__item">Feeling emotions.</li>

            <li className="hobbies-list__item hobbies-list__item--separate">
              Reading Paper Books. <br />
              My most loved authors are C.R. Zafón, Patrick Rothfuss, Alessandro Baricco and Ken Follet.
            </li>

            <li className="hobbies-list__item hobbies-list__item--separate">
              Science related topics: Math, Physics and Psychology. I hate Chemistry.
            </li>

            <li className="hobbies-list__item hobbies-list__item--separate">Watching TV Series like GoT,
            Sherlock or Fringe.</li>
            <li className="hobbies-list__item">Travelling with The Doctor on Tardis.</li>

            <li className="hobbies-list__item hobbies-list__item--separate">
              Wandering around with with my girlfriend.
            </li>
            <li className="hobbies-list__item">Visiting the Botanic Garden.</li>

            <li className="hobbies-list__item hobbies-list__item--separate">Making Origami.</li>
            <li className="hobbies-list__item">Experimenting in kitchen and eating spicy meals.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
