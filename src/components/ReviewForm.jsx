import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';

export const ReviewForm = () => {

    const usageOptions = [
        { label: 'Daily', value: 'Daily' },
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Monthly', value: 'Monthly' },
        { label: 'Rarely', value: 'Rarely' },
        { label: 'First time', value: 'First time' },
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

    const [appUsage, setAppUsage] = useState('');
    const [selectedGoals, setSelectedGoals] = useState([]);
    const [userExperience, setUserExperience] = useState(5); // Default to a neutral rating (e.g., 5)
    const [improvements, setImprovements] = useState('');
    const [birthday, setBirthday] = useState(null);



    const handleAppUsageChange = (e) => {
        setAppUsage(e.target.value);
    };

    const handleGoalChange = (e) => {
        const value = e.target.value;
        if (selectedGoals.includes(value)) {
            setSelectedGoals(selectedGoals.filter((goal) => goal !== value));
        } else {
            setSelectedGoals([...selectedGoals, value]);
        }
    };


    const handleRatingChange = (e) => {
        setUserExperience(parseInt(e.target.value, 10));
    };

    const handleImprovementsChange = (e) => {
        setImprovements(e.target.value);
    };
    const handleBirthdayChange = (date) => {
        console.log(date,'date come');
        setBirthday(date);
    };

    return (
        <Form.Group>
            <Form.Label>How often do you use this app?</Form.Label>
            <div>
                {usageOptions.map((option) => (
                    <Form.Check
                        key={option.value}
                        type="radio"
                        label={option.label}
                        value={option.value}
                        checked={appUsage === option.value}
                        onChange={handleAppUsageChange}
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
                        checked={selectedGoals.includes(goal)}
                        onChange={handleGoalChange}
                    />
                ))}
            </div>
            <Form.Label>Rate user experience (1-10)</Form.Label>
            <Form.Range
                min="1"
                max="10"
                step="1"
                value={userExperience}
                onChange={handleRatingChange}
            />
            <div className="d-flex justify-content-between">
                {ratingLabels.map((label, index) => (
                    <span key={index} className={userExperience === index + 1 ? 'font-weight-bold' : ''}>
                        {label}
                    </span>
                ))}
            </div>
            <Form.Label>Suggest any improvements:</Form.Label>
            <Form.Control
                as="textarea"
                rows="4" // You can adjust the number of rows as needed
                value={improvements}
                onChange={handleImprovementsChange}
            />
            <Form.Label>Enter your birthday?</Form.Label>
            <DatePicker
                selected={birthday}
                onChange={handleBirthdayChange}
                value={birthday}
                format='dd/MM/yyy' // You can adjust the date format as needed
                showYearDropdown
                scrollableYearDropdown
        
            />
        </Form.Group>
    )
}
