import React from 'react';
import ListShimmering from 'react-loading-shimmering'
import { Card } from 'material-ui'
import {Col} from 'react-bootstrap'

const CardLoad = ({show, quantity}) => {
    var elements = []
    if(show){
        for (let index = 0; index < quantity; index++) {
           elements.push(<Col md={4} xs={12} sm={6} style={{marginTop:50}}>
                            <Card style={{width:300, height:260}}>
                                <ListShimmering></ListShimmering>
                            </Card>
                        </Col>
                        )   
        }
        return(
            <div>
                {elements}
            </div>
            
            
        )
    }else{
        return (
            <div></div>
        )
    }
}
export default CardLoad;