import React, { useState, useEffect } from 'react'
import { ReviewResults } from '../components/ReviewResults'
import { NavBar } from '../components/NavBar'
import { userReviewResultAPI } from '../api/user'
import { LoadSpinner } from '../components/LoadSpinner'
import { Container, Row, Col } from 'react-bootstrap';

export const ResultPage = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        userReviewResultAPI().then((res) => {
            console.log(res.data?.reviewResult);
            if (res.data?.reviewResult === 'No records') {
                setReviewData(res.data?.reviewResult)
            } else {
                formatData(res.data?.reviewResult)
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    function formatDate(isoDate) {
        const date = new Date(isoDate);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
    const formatData = (res) => {
        const data = (res.map((review, index) => ({ ...review, birthday: formatDate(review.birthday) })))
        setReviewData(data)
    }

    let content;
    if (reviewData === 'No records') {
        console.log('called');
        content = (
            <Container fluid>
                <Row className="justify-content-center align-items-center min-vh-100">
                    <Col className="text-center">
                        <div style={{ color: 'red', fontSize: '24px' }}>No records</div>
                    </Col>
                </Row>
            </Container>
        )
    }
    else if (reviewData?.length === 0) {
        content = <LoadSpinner />
    }
    else {
        content = <ReviewResults props={reviewData} />
    }
    return (
        <div>
            <NavBar />
            {content}
        </div>
    )
}
