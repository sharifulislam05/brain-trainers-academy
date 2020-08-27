import React from 'react';
import './SingleCourse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Card, Button } from 'react-bootstrap';

const SingleCourse = (props) => {
    const { poster, title, instructor, price } = props.programs
    return (
        <div className='course'>
            <Card>
                <Card.Img variant="top" src={poster} className='course-poster' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        By-{instructor} <br />
                           Price: ${price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={() => props.handleEnrollment(props.programs)}>
                        <FontAwesomeIcon icon={faCartPlus} />
                 Enroll Now</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default SingleCourse;