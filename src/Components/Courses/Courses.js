import React, { useState } from 'react';
import fakeData from '../../fakeData-Courses/index'
import SingleCourse from '../SingleCourse/SingleCourse';
import Cart from '../Cart/Cart';
import { Container, Row, Col } from 'react-bootstrap';

const Courses = () => {
    const [programs, setPrograms] = useState(fakeData)
    const [cart, setCart] = useState([])
    const handleEnrollment = (programs) => {
        const newCart = [...cart, programs]
        setCart(newCart)
    }
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={9} className="d-flex flex-wrap">
                        {
                            programs.map(programs =>
                                <SingleCourse
                                    programs={programs} handleEnrollment={handleEnrollment} key={programs.id}>
                                </SingleCourse>)
                        }
                    </Col>
                    <Col md={3}>

                        <Cart cart={cart}></Cart>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;