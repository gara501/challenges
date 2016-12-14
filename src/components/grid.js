import React, { Component } from 'react';
import logo from '../img/prodigious.png';
import periodic from '../img/periodic.png';
import GridCell from './gridcell.js';

class Grid extends Component {

  render() {
    let cells = [
      {
        logo: {logo: periodic},
        title: 'Periodic Table',
        description: 'Create a periodic table using CSS and JS',
        link: '#',
        longDescription: 'The objective of this challenge is to create a periodic' +
            'table using CSS and JS, each cell would have a flip to show the description of each element. ' +
            ' Please see the example image to have an idea of how should be defined. ' +
            ' Points to be evaluated: code organization, techniques used in CSS and JS. ',
        init: '01/01/2017',
        end: '02/01/2017',
        example: 'http://sinfaltas.com/wp-content/uploads/2016/12/Tabla-peri%C3%B3dica-ortograf%C3%ADa-SF.png',
        difficulty: 'medium'
      },
      {
        logo: {logo},
        title: 'Draw and replicate',
        description:'Create a circle with 4 quadrants, each quadrant must replicate drawing done in one quadrant',
        link: '#',
        longDescription: 'The objective of this challenge is to create a circle layout, this circle has 4 quadrants ' +
            'in which you can draw, each quadrant is like a mirror, it replicates any draw you did in the others.' +
            ' Please see the example video.',
        init: '02/01/2017',
        end: '03/01/2017',
        example: 'https://www.facebook.com/sueltalocom/videos/908184159314099/',
        difficulty: 'hard'
      },
      {
        logo: {logo},
        title: 'Clock, give me time!',
        description: 'Create an analog clock using animations in CSS and JS',
        link: '#',
        longDescription: 'The objective of this challenge is to create a clock using css and js. Evaluation criteria: ' +
        ' code organization, technologies used. ',
        init: '03/01/2017',
        end: '04/01/2017',
        example: 'http://www.designyourway.net/diverse/4/cssdemos/ukneA.jpg',
        difficulty: 'medium'
      },
      {
        logo: {logo},
        title: 'Coming Soon',
        description: '',
        link: '#',
        longDescription: ' ',
        init: '04/01/2017',
        end: '05/01/2017',
        example: '',
        difficulty: ''
      }
    ];
    return (
      <div className="Grid">
        {
          cells.map(function(item) {
            console.log('NADA', item.logo);
            return(
              <GridCell logo={item.logo.logo} title={item.title}
                  description={item.description}
                  link={item.link} difficulty={item.difficulty}>
              </GridCell>
            )
          })
        }
      </div>
    );
  }
}

export default Grid;
