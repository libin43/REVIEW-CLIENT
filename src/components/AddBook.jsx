import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from '../utils/api'

const AddBook = () => {
    const [bookName, setBookName] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [publishYear, setPublishYear] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const formData = {
            bookName,
            authorName,
            publishYear,
            price,
          };
          console.log(formData);
          try {
            const response = await axios.post('/addBook', formData); // Adjust the API endpoint URL
            console.log('Response from server:', response);
          } catch (error) {
            console.error('Error sending data:', error);
          }

    }
    return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} placeholder="Enter Name of the Book" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder="Enter Name of the Author" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Year of Publication</Form.Label>
            <Form.Control type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)}  placeholder="Enter Year" />
          </Form.Group>
    
          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
            </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
}

export default AddBook