import React from 'react';
import Chart from 'chart.js';
import Waypoint from 'Waypoint';

export default class Radar extends React.Component {
  componentDidMount() {
    const ctx = this.canvas.getContext('2d');
    const data = {
      labels: ['PERFORMANCE ANALYSIS', 'AGILE DEVELOPMENT', 'TESTABLE CODE', 'STANDARD COMPLIANT',
      'MAINTANABLE CODE'],
      datasets: [
        {
          data: [85, 60, 65, 80, 85],
          fillColor: 'rgba(255,255,255,0)',
          pointColor: '#111',
          pointHighlightFill: '#fff',
          pointStrokeColor: '#111',
          strokeColor: '#111',
        },
      ],
    };
    const options = {
      animationEasing: 'easeOutCirc',
      datasetFill: false,
      datasetStrokeWidth: 1,
      pointLabelFontFamily: 'Source Sans Pro, Helvetica, sans-serif',
      pointLabelFontSize: 14,
      responsive: true,
      showTooltips: false,
    };
    const radar = new Chart(ctx).Radar(data, options); // eslint-disable-line

    const waypoint = new Waypoint({
      element: this.canvas,
      handler: (dir) => dir === 'down' && new Chart(ctx).Radar(data, options), // eslint-disable-line
      offset: '60%',
    });
  }

  render() {
    return (
      <div className="radar-responsive">
        <canvas
          className="radar"
          ref={ (c) => (this.canvas = c) }
        />
      </div>
    );
  }
}
