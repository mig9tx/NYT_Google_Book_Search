import React from 'react';

const Card = (props) => {
    return (
        <div className='Card' key={props.id}>
            <img alt={props.id} src={props.image}></img>
            <p>Book Title: {props.title}</p>
            <p>Book Author(s): {props.author}</p>
            <p>Book Description: {props.description}</p>
        </div>
    )
}

export default Card;