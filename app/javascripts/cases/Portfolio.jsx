import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <header className="case__header">
        <h2 className="case__heading">My Personal Website</h2>
        <p className="subtitle">Portfolio in React</p>
      </header>
      <main>
          <h3>Overview</h3>
          <p><em>March 2016</em>. Redesigning our personal website is a common desire for web designers or
          developers and we all know how long it can actually take before the will becomes action.</p>
          <p>In my case, I felt it was also a <strong>necessity</strong> because my previous website didn't reflect
          the front-end developer I am currently. Tons of things happened since May 2015, when I ended
          the previous version, and I felt it was counter-productive giving
          an outdated concept of me.</p>
          <p><strong>I kept my passion for web development</strong> and will to realize people's dreams through my
          work, but my knowledge is more experienced and I have <strong>something new to show</strong>.</p>
          <p>
              <a className="link" href="https://github.com/jiayihu/jiayihu.github.io" target="_blank">
                  › See the project repo
              </a>
          </p>
          <p>You can also read the <a href="https://github.com/jiayihu/jiayihu.github.io/commits/dev" target="_blank">Commits log</a> to have an idea of the project evolution.
          </p>
          <img className="case__preview" src="/images/cases/portfolio/preview.png" />

          <h3>Design</h3>
          <p>Despite not being a professional designer, I felt it was a good idea trying to study
          the design on my own in order to improve myself and become
          a <a href="https://medium.com/creative-business/why-is-it-so-hard-to-find-a-front-end-developer-cb92848a7c6f#59fd" target="_blank">better front-end developer</a>. </p>
          <p><strong>Semplicity</strong> was the key. Overdoing is very easy when working with
          design, leading to a messy outcome with several colors, fonts, animations etc. which don't
          blend nice together.<br /> I started with a <strong>Black & White First</strong> approach to force myself
          focusing on spacing and laying out elements. Colors should be added only when/where
          needed and it eventually turned out that it wasn't necessary for my case.</p>
          <p>My fonts of choice were instead <a href="https://www.google.com/fonts/specimen/Cardo">Cardo</a> & <a href="https://www.google.com/fonts/specimen/Source+Sans+Pro">Source Sans Pro</a>. The
          former reflects my love for paper books whereas the latter is my favourite sans-serif font
          and it resembles Source Code Pro, which I use roughly in my code editor.</p>
          <figure>
              <img src="/images/cases/portfolio/sketch.png" alt="Portfolio Sketch Design" />
              <figcaption>Sketch Design</figcaption>
          </figure>

          <h3>Development</h3>
          <p>Javascript is well-known for its huge number of tools and libraries. For this project
          I chose to maintain my workflow with elements I trust like React, SCSS, Gulp and Browserify
          while also including something new like <strong>ES6 Javascript</strong> (I read <a href="http://exploringjs.com">Exploring ES6</a> for this purpose).
          Airbnb Style Guide for Javascript/React was moreover a nice improvement of the default
          configuration for ESLint.
          </p>
          <figure>
              <img src="/images/cases/portfolio/workflow.png" alt="Portfolio Development Workflow" />
              <figcaption>Development Tools and Workflow</figcaption>
          </figure>

          <h3>React.js</h3>
          <p><a href="https://facebook.github.io/react/">React.js</a> revolutionised the way we
          build the web and, after the initial difficulties to
          get yourself accustomed to its development, I can't go back anymore. Its innovation,
          stability and power over Angular 2 led me to include it in my learn field and workflow.</p>
          <p>Combined with <em>react-router</em>, it helps you providing a smooth user experience and
          making your pages look like a real application. I don't wish building my website again every year.
          I want it instead to last, to be easily editable and expandable whenever I can think of a
          new feature. </p>

          <h4>Custom Components</h4>
          <p>There were some UI elements (Modal, Tooltip, Alert etc.) which I needed and are very
          common like the carousel
          in Projects section and several repositories on Github provided the component but most of them
          included different other components which I didn't use, with therefore too
          much <strong>dead code</strong> for me. <br />
          Those I tried for a while had instead huge performance problems, were written in a bad mix
          of ES5/ES6 bad practises or were inactive.</p>
          <p>With my custom components, I have them usable wherever I want and with <strong>code I can trust</strong>.
          I have also more customisation because they take advantage of CSS libraries, whose animations
          are easily editable. When we use external JS libraries we tend to be happy with its own
          default styles/animations because we are lazy and we don't want to spend time reading the
          source code.</p>
          <p>I also learnt a bit more about React components lifecycle and optimisations like cleaning
          event handlers on <code>willComponentUnmount</code>.</p>
          <figure>
              <img src="/images/cases/portfolio/es6.jpg" alt="React ES6 custom Components" />
              <figcaption>My tiny and simple Modal Component</figcaption>
          </figure>

          <h3>Performance</h3>
          <p>How your application/website performs is fundamental when trying to deliver a smooth user navigation. <br />
          I didn't use <code>shouldComponentUpdate</code> because the application doesn't have huge
          and highly frequent renders, but I applied nevertheless some good practises like clearing DOM
          event listeners when components will be unmounted to <strong>avoid memory leaks</strong>. <br />
          Maybe it won't affect my website since it's not a large scale application, but it could
          avoid unexpected and difficult to debug behaviour, saving me hours of headaches.</p>
          <p>Last but not least I also <a href="https://benfrain.com/improving-css-performance-fixed-position-elements/">applied <code>backface-visibility</code></a> to fixed elements
          and <code>will-change</code> to those who are animated to improve <strong>scroll performance</strong>.
          Google Chrome has an <em>enable paint flashing</em> option to show elements which trigger
          repaint in order to help you debug.</p>

          <blockquote>
              For all the rest there's <del>Mastercard</del> <a href="http://gulpjs.com/" target="_blank">Gulp</a>.
          </blockquote>

          <figure>
              <img src="/images/cases/portfolio/pingdom.png" alt="Pingdom Website Speed test" />
              <figcaption>Speed test result after some other tweaks like GZip and Cache</figcaption>
          </figure>

          <h3>Conclusion</h3>
          <p>I feel like I grew a bit wiser after finishing my portfolio.</p>
          <p>I read very interesting books, like <a href="http://www.amazon.com/Designing-Mind-Simple-Understanding-Interface/dp/012375030X">Designing with the Mind in Mind</a>, which helped me to develop
          further my sense of UI. I also increased my experience and understanding of React. For example its
          lifecycle gave me some headaches because it altered <a href="http://imakewebthings.com/waypoints/">Waypoints.js</a> calculations in an unexpected way.</p>
          <p>Besides I can take a long breath now, since the website shows an actual image of me. I surely
          will make changes in future, but I hope and believe that the core will last.</p>
        </main>
    </div>
  );
}
