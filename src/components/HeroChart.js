import React, {Component} from 'react';
import {Radar} from 'react-chartjs';



class HeroChart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataChart: [0,0,0,0]
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillMount = () => {
    this.setState({
      dataChart: this.props.data.dataChart
    })
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      dataChart: nextProps.data.dataChart
    })
  }

  render() {
    const  charData = {
      labels: ['Invisibility','Freezing', 'Fire', 'Speed'],
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
