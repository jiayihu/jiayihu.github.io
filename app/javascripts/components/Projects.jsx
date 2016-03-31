import React from 'react';
import Carousel from 'nuka-carousel';
import Project from './Project';

import PrevController from './CarouselCtrls/PrevController';
import NextController from './CarouselCtrls/NextController';
import DotsControllers from './CarouselCtrls/DotsControllers';

const Decorators = [
  {
    component: PrevController,
    position: 'CenterLeft',
  },
  {
    component: NextController,
    position: 'CenterRight',
  },
  {
    component: DotsControllers,
    position: 'BottomCenter',
  },
];

const Projects = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    const projectsData = [
      {
        preview: '/images/kanban.svg',
        title: 'React.js Kanban 0',
        tags: '#REACT #REDUX #ENZYME',
        url: '/project/kanban',
      },
      {
        preview: '/images/kanban.svg',
        title: 'React.js Kanban 1',
        tags: '#REACT #REDUX #ENZYME',
        url: '/project/kanban',
      },
      {
        preview: '/images/kanban.svg',
        title: 'React.js Kanban 2',
        tags: '#REACT #REDUX #ENZYME',
        url: '/project/kanban',
      },
      {
        preview: '/images/kanban.svg',
        title: 'React.js Kanban 3',
        tags: '#REACT #REDUX #ENZYME',
        url: '/project/kanban',
      },
    ];
    const projectsList = projectsData.map((project, index) => <Project {...project} key={index} />);

    return (
      <Carousel decorators={Decorators} dragging={false} >
        {projectsList}
      </Carousel>
    );
  },
});

export default Projects;
