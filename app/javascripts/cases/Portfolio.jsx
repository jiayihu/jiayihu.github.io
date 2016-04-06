import React from 'react';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <header className="case__header">
          <h2 className="case__heading">My Personal Website</h2>
          <p className="subtitle">Portfolio</p>
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
            <p>There were some UI elements which I needed and are very common like the carousel
            in Projects section and several repositories on Github provided the component but most of them
            included different other components which I didn't use, with therefore too
            much <strong>dead code</strong> for me.</p>
            <p>Among stand-alone components there was a repo which seemed to fullfil my needs: small,
            customisation supported, ES6 and good amount of stars. Anyway after trying it for a while I
            discovered that it had a huge performance problem but the owner was not active because
            there was already an issue on Github with several people asking for a fix.</p>
            <p>After spending an afternoon trying to analyse the issue, I managed to understand the problem
            and I really wished to help fixing it but it was a core problem, the code had no comments and
            it was actually a mix of ES5 and ES6 bad practises. <br />
            So I pointed out the bug on Github, suggested my quick fix for anyone else, asked
            whether the project was still active and started to write my own component.</p>
            <p>Now I have a component usable wherever I want and with <strong>code I can trust</strong>.
            I also learnt a lot during the process and there are no lines of code out of my purposes.</p>
            <figure>
                <img src="/images/cases/portfolio/es6.jpg" alt="React ES6 custom Components" />
                <figcaption>React ES6 custom Components</figcaption>
            </figure>

            <h3>Conclusion</h3>
            <p>I feel like I grew a bit wiser after finishing my portfolio.</p>
            <p>I read very interesting books, like <a href="http://www.amazon.com/Designing-Mind-Simple-Understanding-Interface/dp/012375030X">Designing with the Mind in Mind</a>, which helped me to develop
            further my sense of UI. I also increased my experience and understanding of React, for example its
            lifecycle gave me some headaches because it altered <a href="http://imakewebthings.com/waypoints/">Waypoints.js</a> calculations in an unexpected way.</p>
            <p>I can also take a long breath now, since the website shows an actual image of me. I surely
            will make changes in future, but I hope and believe that the core will last.</p>
          </main>
      </div>
    );
  }
}
