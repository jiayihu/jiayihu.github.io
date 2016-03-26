import React, { PropTypes } from 'react';

export default class Project extends React.Component {
  render() {
    return (
      <span>
        This is the project: {this.props.params.name}
      </span>
    );
  }
}

Project.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string,
  }),
};
