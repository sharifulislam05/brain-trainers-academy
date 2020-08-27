import React from 'react';
import SingleCart from '../SingleCart/SingleCart';
import { Container, Alert } from 'react-bootstrap';


const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total, cart) => total + Number(cart.price), 0)
    return (
        <div>
            <Container fluid>
                <Alert variant='danger'>
                    <h3 className="text-success">Order-Summery</h3>  <br />
                    <h6>Course Enrolled: {cart.length}</h6>
                    <h6 className="text-danger bold">Total Price: ${totalPrice}</h6>
                </Alert>
                {
                    cart.map(singleCart => <SingleCart singleCart={singleCart} key={singleCart.id}></SingleCart>)
                }
            </Container>
        </div>
    );
};

export default Cart;