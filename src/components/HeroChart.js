import React, {Component} from 'react';
import {Radar} from 'react-chartjs';


class HeroChart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataChart: [0,0,0,0]
    }
  }

  componentWillMount = () => {
    this.applyDataChart(this.props.data)
  }

  componentWillReceiveProps = (nextProps) => {
    this.applyDataChart(nextProps.data)
  }

  applyDataChart = ( chartData ) => {
    const result = Object.keys(chartData).map(function(data){
      return [chartData[data]]
    })

    this.setState({
      dataChart: result.slice(0,4)
    })
  }

  render() {
    const  charData = {
      labels: ['Fire', 'Freezing', 'Invisibility','Speed'],
      datasets: [
        {
          data: this.state.dataChart,
          fillColor: "rgba(255,99,132,0.2)",
          strokeColor: "rgba(255,99,132,1)",
          pointColor: "rgba(255,99,132,1)",
          pointBorderColor: '#fff',
        }
      ]
    }

    return(
      <Radar data={charData} width="300" height="250" redraw/>
    )
  }
}
export default HeroChart;
