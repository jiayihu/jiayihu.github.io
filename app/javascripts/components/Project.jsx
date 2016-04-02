import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class Project extends React.Component {
  render() {
    return (
      <div className="project col-sm-8 col-sm-offset-2">
        <img className="project__preview" src={this.props.preview} alt={this.props.title} />
        <div className="project__info">
          <div className="project__meta">
            <h3 className="project__title">{this.props.title}</h3>
            <p className="project__tags">{this.props.tags}</p>
          </div>
          <Link to={this.props.url} className="project__cta btn">SEE THIS WORK</Link>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  preview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
