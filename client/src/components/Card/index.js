import React from 'react';

const Card = (props) => {
    return (
        <div className='Card' key={props.id}>
            <p>Book Title: {props.title}</p>
            <p>Book Author(s): {props.author}</p>
            <img alt={props.id} src={props.image}></img>
            <p>Book Description: {props.description}</p>

        </div>
    )
}

export default Card;