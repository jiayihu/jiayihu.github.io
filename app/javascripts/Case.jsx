import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Logo from './components/Logo';
import NotFound from './NotFound';
import Portfolio from './cases/Portfolio';
import Kanban from './cases/Kanban';
import Chattina from './cases/Chattina';
import Tooltip from './components/Tooltip';

export default class Project extends React.Component {
  componentDidMount() {
    if (this.case) {
      this.case.classList.add('fade-enter');
    }
  }

  /**
   * Restart the fade animation
   */
  componentWillUpdate() {
    this.case.classList.remove('fade-enter');
    // Trigger reflow. @see {https://css-tricks.com/restart-css-animation/}
    this.case.offsetWidth; // eslint-disable-line
  }

  componentDidUpdate() {
    this.case.classList.add('fade-enter');
  }

  render() {
    const router = this.context.router;
    const cases = {
      portfolio: {
        content: Portfolio,
        nextCase: 'kanban',
        prevCase: 'chattina',
        title: 'My Personal Portfolio',
      },
      kanban: {
        content: Kanban,
        nextCase: 'chattina',
        prevCase: 'portfolio',
        title: 'React.js Kanban Board',
      },
      chattina: {
        content: Chattina,
        nextCase: 'portfolio',
        prevCase: 'kanban',
        title: 'Chattina',
      },
    };
    const caseData = cases[this.props.params.name];

    if (!caseData) {
      return <NotFound />;
    }

    const caseElement = React.createElement(caseData.content);

    return (
      <div className="case container" ref={ (c) => (this.case = c) }>
        <Logo />
        <button
          className="arrow arrow--dark arrow--prev"
          onClick={ () => router.goBack() }
        >
          <Tooltip hintText="Go Back" position="right" />
        </button>

        <button
          className="arrow arrow--dark arrow--next"
          onClick={ () => router.push(`/project/${caseData.nextCase}`) }
        >
          <Tooltip hintText={cases[caseData.nextCase].title} position="left" />
        </button>

        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            {caseElement}
          </div>
        </div>

        <Link to="/" className="case__back link">Go Back</Link>
      </div>
    );
  }
}

Project.propTypes = {
  history: PropTypes.object,
  params: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Project.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
