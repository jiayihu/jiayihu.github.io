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
        preview: '/images/showcase/portfolio.svg',
        title: 'Personal Website',
        tags: '#REACT #ROUTER',
        url: '/project/portfolio',
      },
      {
        preview: '/images/showcase/kanban.svg',
        title: 'Kanban Board',
        tags: '#REACT #REDUX #ENZYME',
        url: '/project/kanban',
      },
      {
        preview: '/images/showcase/kanban.svg',
        title: 'Chattina',
        tags: '#MVC #VANILLA-JS',
        url: '/project/chattina',
      },
      // {
      //   preview: '/images/showcase/kanban.svg',
      //   title: 'The Wealth Project',
      //   tags: '#DATA #MVC #VANILLA-JS',
      //   url: '/project/kanban',
      // },
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
