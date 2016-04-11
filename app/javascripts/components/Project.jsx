import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function Project(props) {
  return (
    <div className="project col-sm-8 col-sm-offset-2">
      <img className="project__preview" src={props.preview} alt={props.title} />
      <div className="project__info">
        <div className="project__meta">
          <h3 className="project__title">{props.title}</h3>
          <p className="project__tags">{props.tags}</p>
        </div>
        <Link to={props.url} className="project__goto btn btn--wapasha">SEE THIS WORK</Link>
      </div>
    </div>
  );
}

Project.propTypes = {
  preview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
