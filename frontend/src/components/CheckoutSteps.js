import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const CheckoutSteps = ({signingProcess, shippingProcess, orderProcess, paymentProcess}) => {
    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {signingProcess ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>Sign In</Nav.Link>
                    </LinkContainer>
                ): (
                    <Nav.Link disabled>Sign In</Nav.Link>
                )}
            </Nav.Item>
            <Nav.Item>
                {shippingProcess ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>Shipping</Nav.Link>
                    </LinkContainer>
                ): (
                    <Nav.Link disabled>Shipping</Nav.Link>
                )}
            </Nav.Item>
            <Nav.Item>
                {paymentProcess ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>Payment</Nav.Link>
                    </LinkContainer>
                ): (
                    <Nav.Link disabled>Payment</Nav.Link>
                )}
            </Nav.Item>
            <Nav.Item>
                {orderProcess ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>Place Order</Nav.Link>
                    </LinkContainer>
                ): (
                    <Nav.Link disabled>Place Order</Nav.Link>
                )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
