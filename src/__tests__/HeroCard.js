import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';


import HeroCard from '../components/HeroCard'
import {CardHeader, CardActions} from 'material-ui/Card';

describe('<HeroCard />', () => {
  var wrapper;

  beforeAll( () => {
    let hero = {
      name: 'Ramonzito' 
    }
    wrapper = shallow(<HeroCard hero={hero} />);
  })

  it('Should use CardHeader with name, subtitle and avatar when render HeroCard', () => {
    expect(wrapper.contains(<CardHeader title="Ramonzito" subtitle="Marvel" avatar="unknowuser.png" />)).to.equal(true);
  });

  it('Should use CardActions to perfom actions on the component', () => {
    expect(wrapper.find(CardActions)).to.have.length(1)
  })



});