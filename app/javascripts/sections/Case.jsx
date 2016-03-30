import React, { PropTypes } from 'react';
import Logo from '../components/Logo';

export default class Project extends React.Component {
  render() {
    return (
      <div className="case">
        <Logo />
        <span>
          This is the project: {this.props.params.name}
        </span>
      </div>
    );
  }
}

Project.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string,
  }),
};
