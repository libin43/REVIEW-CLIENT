import React from 'react'
import { Container, Card, ListGroup } from 'react-bootstrap'

export const ReviewResults = ({props}) => {
    console.log(props,'incom');
  return (
    <Container>
    <h2 className="mt-5 mb-3">Review Results</h2>
    {props.map((review, index) => (
      <Card key={index} className="mb-4">
        <Card.Body>
          <Card.Title>Review #{index + 1}</Card.Title>
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
        </Card.Body>
      </Card>
    ))}
  </Container>
  )
}
