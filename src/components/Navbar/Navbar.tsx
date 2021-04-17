import React from 'react'
import { Nav, Navbar as BootstrapNavbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export const Navbar = () => {
    return (
        <div className="d-flex pt-3 w-100">
            <BootstrapNavbar bg="light" expand="lg" className="w-100 bg-transparent">
                <BootstrapNavbar.Brand as={Link} to="/"><img src={Logo} width="50" alt="Careerado"/></BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="text-dark">Home</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </BootstrapNavbar>
        </div>
    )
}

