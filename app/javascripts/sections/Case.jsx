import React, { PropTypes } from 'react';

import Logo from '../components/Logo';
import Portfolio from '../cases/Portfolio';
import Kanban from '../cases/Kanban';

export default class Project extends React.Component {
  render() {
    const router = this.context.router;
    const cases = {
      portfolio: {
        prevCase: 'chattina',
        content: Portfolio,
        nextCase: 'kanban',
      },
      kanban: {
        prevCase: 'portfolio',
        content: Kanban,
        nextCase: 'chattina',
      },
    };
    const caseData = cases[this.props.params.name];
    console.log(caseData);
    const caseElement = React.createElement(caseData.content);

    return (
      <div className="case container">
        <Logo />
        <button
          className="arrow arrow--dark arrow--prev"
          onClick={ () => router.goBack() }
        />
        <button
          className="arrow arrow--dark arrow--next"
          onClick={ () => router.push(`/project/${caseData.nextCase}`) }
        />
        <div className="col-sm-8 col-sm-offset-2">
          {caseElement}
        </div>
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
