import React from 'react';

export default function Kanban() {
  return (
    <div>
      <header className="case__header">
        <h2 className="case__heading">Kanban Board</h2>
        <p className="subtitle">Web Application in React</p>
      </header>
      <main>
          <h3 className="case__heading">Overview</h3>
          <p><em>February 2016</em>. This project was developed starting from <a href="https://github.com/survivejs/webpack_react">Survive.js tutorial</a>,
          which explains how to
          create a basic Kanban Application (used in Agile development) with React.js, Webpack and
          Alt.js as Flux compliant library.</p>
          <p>I took a step further though and tried to make it a bit more challenging using Redux
          instead of Alt.js, adding different extra features and building a fancier UI.</p>
          <p>
              <a className="link" href="https://github.com/jiayihu/react-kanban" target="_blank">
                  › See the project repo
              </a>
              <a className="link" href="http://jiayihu.me/react-kanban/" target="_blank">
                  › Try the application
              </a>
          </p>

          <img className="case__preview" src="/images/cases/kanban/preview.png" />

          <h3 className="case__heading">Sorry, this case studio is still in progress.</h3>
        </main>
    </div>
  );
}
