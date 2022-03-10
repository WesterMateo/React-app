import React from 'react'
import './Card.css';

const Card = (props) =>  {
    return (
        <div className='Card' key= {props.id}>            
            <div>
                <img src={props.linkImage} alt= 'No data' />
                <h3>
                    {props.name}
                </h3>
                <p>
                    {props.email}
                </p>
            </div>
        </div>
    );
}

export default Card