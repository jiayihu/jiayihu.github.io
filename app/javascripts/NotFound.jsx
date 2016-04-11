import React from 'react';
import { Link } from 'react-router';
import Logo from './components/Logo';

export default function NotFound() {
  return (
    <div className="container">
      <Logo />
      <section className="not-found">
        <div>
          <svg className="not-found__icon"><use xlinkHref="/images/icons.svg#404"></use></svg>
          <h2 className="not-found__heading">404 - Page not found</h2>
          <h3>Whooops. The page you were looking for does not exist.</h3>
          <p>
            <Link to="/" className="not-found__btn btn btn--wapasha">Go to the home</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
