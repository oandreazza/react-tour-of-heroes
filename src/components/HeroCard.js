import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom';

const HeroCard = ({hero, deleteHandle}) => (

  <Card style={{width:300, height:200}}>
    <CardHeader
      title={hero.name}
      subtitle="Marvel"
      avatar={require('../../assets/imgs/unknowuser.png')}
    />
    <CardText>
      <Chip>
        <Avatar size={32}>32</Avatar>
        Power
      </Chip>
    </CardText>
    <CardActions>
      <Link to={`/hero/${hero.id}`} >
        <RaisedButton
          label="Edit"
        />
      </Link>
      <RaisedButton label="Delete" onClick={ () => deleteHandle(hero.id)} />
    </CardActions>

  </Card>
)

export default HeroCard;
