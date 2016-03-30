import React from 'react';
import Carousel from 'nuka-carousel';
import Project from './Project';
import Decorators from '../components/Decorators';

const Projects = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    const projectsData = [
      {
        preview: '/images/kanban.svg',
        title: 'React.js Kanban',
        tags: '#REACT #REDUX #ENZYME',
        url: '/project/kanban',
      },
      {
        preview: '/images/kanban.svg',
        title: 'React.js Kanban',
        tags: '#REACT #REDUX #ENZYME',
        url: '/project/kanban',
      },
      {
        preview: '/images/kanban.svg',
        title: 'React.js Kanban',
        tags: '#REACT #REDUX #ENZYME',
        url: '/project/kanban',
      },
      {
        preview: '/images/kanban.svg',
        title: 'React.js Kanban',
        tags: '#REACT #REDUX #ENZYME',
        url: '/project/kanban',
      },
    ];
    const projectsList = projectsData.map((project, index) => <Project {...project} key={index} />);

    return (
      <Carousel decorators={Decorators} >
        {projectsList}
      </Carousel>
    );
  },
});

export default Projects;
