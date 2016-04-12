import React from 'react';

export default function Chattina() {
  return (
    <div>
      <header className="case__header">
        <h2 className="case__heading">Chattina</h2>
        <p className="subtitle">MVC Web Application in native Javascript</p>
      </header>
      <main>
          <h3 className="case__heading">Overview</h3>
          <p><em>Decembre 2015</em>. Chattina is a web based chat built in ES6 Javascript with MVC
          pattern and without any framework like React or Angular.<br />
          The reason is learning and understanding <strong>MVC (Model-View-Controller)</strong> in JS, which is a
          standard design pattern for application development. Similar patterns, named MV*, are for
          example used in well-known frameworks like Angular 1.x and Backbone.</p>
          <p>
              <a className="link" href="https://github.com/jiayihu/chattina" target="_blank">
                  › See the project repo
              </a>
          </p>

          <img className="case__preview" src="/images/cases/chattina/chattina.svg" />

          <h3 className="case__heading">Sorry, this case studio is still in progress.</h3>
        </main>
    </div>
  );
}
