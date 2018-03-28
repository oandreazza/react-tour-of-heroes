import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';


import HeroCard from '../src/components/HeroCard'
import {CardHeader} from 'material-ui/Card';

describe('<HeroCard />', () => {

  it('renders an `.icon-star`', () => {

    let hero = {
      name: 'Ramonzito' 
    }
    const wrapper = shallow(<HeroCard hero={hero} />);
    expect(wrapper.find(CardHeader)).to.have.length(1);
  });


});