import React from 'react';
import { Alert } from 'react-bootstrap';

const SingleCart = (props) => {
    const { title, instructor, price } = props.singleCart
    return (
        <div>
            <Alert variant="success">
                <h3>{title}</h3>
                <p><small>by-{instructor}</small></p>
                <p>Price: ${price}</p>
            </Alert>
        </div>
    );
};

export default SingleCart;