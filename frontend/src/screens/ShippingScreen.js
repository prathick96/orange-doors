import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = ({history}) => {

    const cart = useSelector(state=> state.cart)
    const {shippingAddress} = cart

    const [address,setAddress] = useState(shippingAddress.address)
    const [city,setCity] = useState(shippingAddress.city)
    const [postCode,setPostcode] = useState(shippingAddress.postcode)
    const [country,setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postCode, country}))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps signingProcess shippingProcess />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Address: </Form.Label>
                    <Form.Control type='text' required placeholder='Enter address' value={address} onChange={(e) => setAddress(e.target.value)} ></Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City: </Form.Label>
                    <Form.Control type='text' required placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)} ></Form.Control>
                </Form.Group>
                <Form.Group controlId='postCode'>
                    <Form.Label>PostCode: </Form.Label>
                    <Form.Control type='text' required placeholder='Enter postCode' value={postCode} onChange={(e) => setPostcode(e.target.value)} ></Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>Country: </Form.Label>
                    <Form.Control type='text' required placeholder='Enter country' value={country} onChange={(e) => setCountry(e.target.value)} ></Form.Control>
                </Form.Group>
                <Button variant='primary' type='sumbit'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
