import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { register } from '../../actions/userActions'

const SignupScreen = ({ history }) => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            window.location.href = '/'
        }
    }, [history, userInfo])


    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(fname, lname, email, phoneNo, password, image))
        }
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const { data } = await axios.post('/api/uploads/image', formData)

            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    return (

        <FormContainer>
            <h1 style={{ marginBottom: '30px' }}>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {/* {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
         */}
            <Form onSubmit={submitHandler} >
                <Form.Group controlId='fname'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type='fname'
                        placeholder='Enter first name'
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='lname' className='mt-2'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='lname'
                        placeholder='Enter last name'
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email' className='mt-2'>
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='phoneNo' className='mt-2'>
                    <Form.Label>Phone No </Form.Label>
                    <Form.Control
                        type='phoneNo'
                        placeholder='Enter Phone No'
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password' className='mt-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword' className='mt-2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    ></Form.Control>
                    <Form.File
                        id='image-file'
                        label='Choose File'
                        custom
                        onChange={uploadFileHandler}
                    ></Form.File>
                    {uploading}
                </Form.Group>

                <Button type='submit' variant='dark' className='mt-3'>
                    Register
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account?{' '}
                    <Link to='/login'>
                        Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default SignupScreen
