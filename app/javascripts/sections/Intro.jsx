import React from 'react';

export default class Intro extends React.Component {
  render() {
    return (
      <section className="intro">
        <figure className="little-prince container">
          <blockquote>
            “A rock pile ceases to be a rock pile the moment a single man contemplates it,
            bearing within him the image of a cathedral.”
          </blockquote>
          <figcaption>― Antoine de Saint-Exupéry, The Little Prince</figcaption>
        </figure>
        <svg className="scroll" width="32" height="56" viewBox="0 0 32 56" xmlns="http://www.w3.org/2000/svg">
          <title>scroll icon</title>
          <g fill="none" fill-rule="evenodd">
            <rect strokeOpacity=".7" stroke="#FFF" strokeWidth="2" width="32" height="56" rx="8" />
            <circle fillOpacity=".7" fill="#FFF" cx="16" cy="15" r="3" />
            <circle fillOpacity=".7" fill="#FFF" cx="16" cy="25" r="3" />
          </g>
        </svg>
      </section>
    );
  }
}
