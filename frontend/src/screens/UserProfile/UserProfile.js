import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'
import { Form, Button, Row, Col, Container, Image } from 'react-bootstrap'
import { getUserDetails, updateUserProfile } from '../../actions/userActions'

const UserProfile = ({ history }) => {

    const dispatch = useDispatch()

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)
    const [message, setMessage] = useState(null)

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;


    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else {
            if (!user.email) {
                dispatch(getUserDetails('profile'));
            } else {
                setFname(user.fname);
                setLname(user.lname);
                setEmail(user.email);
                setPhoneNo(user.phoneNo);
                setImage(user.image);
            }
        }
    }, [dispatch, history, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, fname, lname, email, phoneNo, image, password }))
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
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '20px',marginBottom:'40px' }}>User Profile</h1>
            <FormContainer>
                {message && <Message variant='danger'>{message}</Message>}
                {success && <Message variant='success'>Profile Updated</Message>}
           

                    <Image src={user.image} width='30%' height='15%'  className='rounded mx-auto d-block' />

                    <p style={{ textAlign:'center', marginTop:'30px' }}><b>UserId:{user._id}</b></p>
              

                    <Form onSubmit={submitHandler} style={{ marginTop: '50px' }} >
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
                            Update
                        </Button>
                    </Form>
           
            </FormContainer>
        </div>
    )
}

export default UserProfile
