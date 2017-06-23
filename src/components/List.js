import React from 'react';
import {Col} from 'react-bootstrap'
const List = ({dataSource,render}) => {
  return(
    <div>
      {
      dataSource.map( data => {
        return(
          <Col md={4} xs={12} sm={6} style={{marginTop:50}}>
            {render(data)}
          </Col>
        )
      })
    }
    </div>
  )
}

export default List;
