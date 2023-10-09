import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Toast } from 'react-bootstrap';
import { LoadSpinner } from './LoadSpinner';
import { Rating } from 'react-simple-star-rating';
import { reviewFormValidation } from '../validations/reviewform';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import { userSubmitReviewAPI } from '../api/user';

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

    // Catch Rating value
    const handleRating = (rate) => {
        setFormData((prevData) => ({
            ...prevData,
            userExperience: rate,
        }))
  
      // other logic
    }
    const [formData, setFormData] = useState({
        appUsage: '',
        selectedGoals: [],
        userExperience: null,
        improvements: '',
        birthday: null,
    })
    const [spinner, setSpinner] = useState(false)
    const [showToast, setShowToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);


    const handleChange = (e) => {
        console.log(e,'its rate');
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

    const onPointerMove = (value, index) => console.log(value, index)

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
        if(!reviewFormValidation(formData)) {
            setShowErrorToast(true)
            setTimeout(()=>{
                setShowErrorToast(false)
            },3000)
            return
        }
        setSpinner(true)
        try {
            const res = await userSubmitReviewAPI(formData)
            setSpinner(false)
            showSubmitToast()
            setFormData({
                appUsage: '',
                selectedGoals: [],
                userExperience: null,
                improvements: '',
                birthday: null,
            });
        } catch (error) {
            console.log(error);
        }
    }

    if(spinner){
        return(
            <LoadSpinner/>
        )
    }

    return (
        <>
        <span style={{'color':'red'}}>* Required fields</span>
        <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
            <Form.Label className="mb-2"><span style={{'color':'red'}}>*</span>1. &nbsp;How often do you use this app?</Form.Label>
            <div>
                {usageOptions.map((value) => (
                    <Form.Check
                        key={value}
                        type="radio"
                        label={value}
                        value={value}
                        name="appUsage"
                        checked={formData.appUsage === value}
                        onChange={handleChange}
                    />
                ))}
            </div>
            <hr />
        </Form.Group>
        <Form.Group className="mb-4">
            <Form.Label className="mb-2"><span style={{'color':'red'}}>*</span>2. &nbsp;Main app goal?</Form.Label>
            <div>
                {goalOptions.map((goal) => (
                    <Form.Check
                        key={goal}
                        type="checkbox"
                        label={goal}
                        value={goal}
                        name="selectedGoals"
                        checked={formData.selectedGoals.includes(goal)}
                        onChange={handleChange}
                    />
                ))}
            </div>
            <hr />
        </Form.Group>
        <Form.Group className="mb-4">
            <Form.Label className="mb-2"><span style={{'color':'red'}}>*</span>3. &nbsp;Rate user experience (1-10)</Form.Label>
            <Rating
            onClick={handleRating}
            size={50}
            iconsCount={10}
            showTooltip
            tooltipArray={ratingLabels}
            onPointerMove={onPointerMove}
            
            />
            <hr />
        </Form.Group>
        <Form.Group className="mb-4">
            <Form.Label className="mb-2"><span style={{'color':'red'}}>*</span>4. &nbsp;Suggest any improvements:</Form.Label>
            <Form.Control
                as="textarea"
                rows="4"
                value={formData.improvements}
                name="improvements"
                required
                onChange={handleChange}
            />
            <hr />
        </Form.Group>
        <Form.Group className="mb-4">
            <Form.Label className="mb-2"><span style={{'color':'red'}}>*</span>5. &nbsp;Enter your birthday:</Form.Label>
            <DatePicker
                selected={formData.birthday}
                onChange={handleBirthdayChange}
                value={formData.birthday}
                name="birthday"
                format="dd/MM/yyyy"
                showYearDropdown
                scrollableYearDropdown
                maxDate={new Date()}
            />

        </Form.Group>
        <Button className='mb-4 mx-4' variant="primary" type="submit">
            Submit Review
        </Button>

        <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                backgroundColor: 'green',
            }}
        >
            <Toast.Header closeButton={true}>
                <strong className="mr-auto">Review Submitted</strong>
            </Toast.Header>
            <Toast.Body>Your review has been submitted.</Toast.Body>
        </Toast>
        <Toast
            show={showErrorToast} // Show the error toast when showErrorToast is true
            onClose={() => setShowErrorToast(false)} // Close the error toast
            style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                backgroundColor: 'red', // Set the background color for the error toast
            }}
        >
            <Toast.Header closeButton={true}>
                <strong className="mr-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>Please fill out all required fields.</Toast.Body>
        </Toast>
    </Form>
    </>
    )
}
