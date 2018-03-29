import React,{Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class DropDownField extends Component{

  state = {
    value: this.props.value
  }

  handleChange = (event, index, value) => {
    this.setState({value})
  }
  render(){
    const { label, source } = this.props;
    return(
      <SelectField
        floatingLabelText={label}
        value={this.state.value}
        onChange={this.handleChange}
      >
        {
          source.map( (data) => {
            return(
              <MenuItem key={data.id} value={data.id} primaryText={data.name} />
            )
          })
        }
      </SelectField>
    )
  }

}

export default DropDownField;
