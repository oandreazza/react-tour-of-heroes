import React from 'react';

class HeroEdit extends React.Component{
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    let param = this.props.match.params.id;
    console.log(param);
    this.props.getUser(param);
  }

  render() {
    const {data} = this.props;
    console.log(data);
    return(
      <div>
        <form>
          <input type="text" value={data.hero.name} />
        </form>
      </div>
    )
  }
}

export default HeroEdit;
