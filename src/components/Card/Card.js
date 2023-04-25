import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./card.css"
import happy from '../../assets/icons8-happy-50.png'
import sad from '../../assets/icons8-sad-50.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const style = {
    width: '100%',
    maxWidth: "100%",
    bgcolor: 'background.paper',
  };

const ReviewCard = ({prediction, description}) => {
    // const classes = useStyles();

    // const showDescription = showMore ? description.slice(0,100)+'...' : description;
    let icon = (prediction == 'positive') ? happy : sad;
    console.log(prediction)
    return (
            // <Card className="text-center" >
            //     <Card.Body className='cardBody'>
            //       <Card.Title className='crd-tittle'>
            //         <div>
            //             {prdiction}
            //         </div>
            //         <div>
                        // <img
                        //     style={{ width: '48px', height: '48px', position: 'absolute' }}
                        //     src={prdiction= "positive" ? happy  : sad}
                        // />
            //         </div>
            //       </Card.Title>
            //       <Card.Text style={{paddingLeft: "70px"}}>
            //        {description}
            //       </Card.Text>
            //     </Card.Body>
            // </Card>
            
            // <div className='card-div'>
            //     <div className='sentiment'>
            //         <img style={{ width: '38px', height: '38px' }} src={happy}  />
            //         <p style={{fontWeight: "bold"}}>{prediction}</p>
            //     </div>
            //     <div className='card-ontent'>
            //         {description}
            //     </div>
            // </div>

            <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem>
                    <div style={{display:"flex" , flexDirection: "row" , justifyContent: "space-evenly"}}>
                        <div style={{display:"flex" , flexDirection: "column", justifyContent: "center", alignItems: "center"}}> 
                            <img style={{ width: '38px', height: '38px', position: 'relative' }} src={icon} />
                            <p style={{position: "relative", paddingTop: "10px"}}>{prediction}</p>
                        </div>
                        <div style={{paddingLeft:"30px"}}> 
                        <p>{description}</p>
                        </div>
                    </div>
                </ListItem>
                <Divider />
            </List>
      );

}
 
export default ReviewCard;