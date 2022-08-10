import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'

export default function MyNavbar() {

    const date = new Date()

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">{ date.toLocaleString("en-GB") }</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
