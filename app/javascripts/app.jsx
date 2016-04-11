import React, { PropTypes } from 'react';

export default function App(props) {
  return (
      <div>
        {props.children}
      </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
