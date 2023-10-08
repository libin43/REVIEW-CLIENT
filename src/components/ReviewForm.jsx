import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Toast } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import { userSubmitReviewAPI } from '../api/user'

export const ReviewForm = () => {

    const usageOptions = [
        'Daily',
        'Weekly',
        'Monthly',
        'Rarely',
        'First time',
    ];

    const goalOptions = [
        'Information',
        'Chat',
        'Entertainment',
        'Buy',
        'Socialize',
        'Other',
    ];

    const ratingLabels = [
        'Very Bad',
        'Bad',
        'Not Good',
        'Okay',
        'Good',
        'Very Good',
        'Excellent',
        'Outstanding',
        'Exceptional',
        'Perfect',
    ];

    const [formData, setFormData] = useState({
        appUsage: '',
        selectedGoals: [],
        userExperience: 5,
        improvements: '',
        birthday: null,
    })

    const [showToast, setShowToast] = useState(false);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        console.log(name, value, type, checked)
        setFormData((prevData) => {
            const newData = { ...prevData }
            if (type === 'checkbox') {
                if (checked) {
                    newData[name] = [...newData[name], value]
                } else {
                    newData[name] = newData[name].filter((item) => item !== value)
                }
            } else {
                newData[name] = value
            }
            return newData
        })
    }

    const handleBirthdayChange = (date) => {
        setFormData((prevData) => ({
            ...prevData,
            birthday: date,
        }))
    }

    const showSubmitToast = () => {
        setShowToast(true);

        // Hide the toast after 3 seconds (adjust the duration as needed)
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        showSubmitToast()
        try {
            const res = await userSubmitReviewAPI(formData)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>How often do you use this app?</Form.Label>
                <div>
                    {usageOptions.map((value) => (
                        <Form.Check
                            key={value}
                            type="radio"
                            label={value}
                            value={value}
                            name='appUsage'
                            checked={formData.appUsage === value}
                            onChange={handleChange}
                        />
                    ))}
                </div>
                <Form.Label>Main app goal?</Form.Label>
                <div>
                    {goalOptions.map((goal) => (
                        <Form.Check
                            key={goal}
                            type="checkbox"
                            label={goal}
                            value={goal}
                            name='selectedGoals'
                            checked={formData.selectedGoals.includes(goal)}
                            onChange={handleChange}
                        />
                    ))}
                </div>
                <Form.Label>Rate user experience (1-10)</Form.Label>
                <Form.Range
                    min="1"
                    max="10"
                    step="1"
                    value={formData.userExperience}
                    name='userExperience'
                    onChange={handleChange}
                />
                <div className="d-flex justify-content-between">
                    {ratingLabels.map((label, index) => (
                        <span key={index} className={formData.userExperience === index + 1 ? 'font-weight-bold' : ''}>
                            {label}
                        </span>
                    ))}
                </div>
                <Form.Label>Suggest any improvements:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="4" // You can adjust the number of rows as needed
                    value={formData.improvements}
                    name='improvements'
                    onChange={handleChange}
                />
                <Form.Label>Enter your birthday?</Form.Label>
                <DatePicker
                    selected={formData.birthday}
                    onChange={handleBirthdayChange}
                    value={formData.birthday}
                    name='birthday'
                    format='dd/MM/yyy' // You can adjust the date format as needed
                    showYearDropdown
                    scrollableYearDropdown
                    maxDate={new Date()}

                />
                <Button variant="primary" type="submit">
                    Submit Review
                </Button>

                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    style={{
                        position: 'fixed',
                        top: '10px',
                        right: '10px',
                    }}
                >
                    <Toast.Header>
                        <strong className="mr-auto">Review Submitted</strong>
                    </Toast.Header>
                    <Toast.Body>Your review has been submitted.</Toast.Body>
                </Toast>
            </Form.Group>
        </Form>
    )
}
