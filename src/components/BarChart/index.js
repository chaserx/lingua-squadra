import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

class BarChart extends Component {
  render() {
    return (
      <VictoryChart>
        <VictoryAxis style={{axisLabel: {fontSize: 20, padding: 30}, tickLabels: {fontSize: 6, padding: 6}}} />
        <VictoryAxis dependentAxis style={{axisLabel: {fontSize: 20, padding: 30}, tickLabels: {fontSize: 6, padding: 6}}} />
        <VictoryBar horizontal data={this.props.data} />
      </VictoryChart>
    )
  }

}

export default BarChart;
