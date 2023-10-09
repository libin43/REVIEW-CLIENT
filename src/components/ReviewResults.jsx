import React from 'react'
import { Container, Card, ListGroup } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';

export const ReviewResults = ({props}) => {
    console.log(props,'incom');
  return (
    <div className='App-body'>
    <Container>
    <h2 className="pt-5 mb-3">Review Results</h2>

    {props.map((review, index) => (
          <Accordion defaultActiveKey="0" className='mt-3'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Review #{index + 1}</Accordion.Header>
            <Accordion.Body>
            <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>App Usage:</strong> {review.appUsage}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Main App Goals:</strong>{' '}
              {review.selectedGoals.join(', ')}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>User Experience Rating:</strong> {review.userExperience}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Improvements:</strong> {review.improvements}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Birthday:</strong> {review.birthday}
            </ListGroup.Item>
          </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    ))}
  </Container>
  </div>
  )
}
