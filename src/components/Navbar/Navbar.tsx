import React, { useContext } from 'react'
import { Dropdown, Nav, Navbar as BootstrapNavbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { AuthContext } from '../../context/AuthContext'
import styles from './Navbar.module.css'

export const Navbar = () => {
    const currentUser = useContext(AuthContext);
    console.log(currentUser);
    return (
        <div className="d-flex pt-3 w-100">
            <BootstrapNavbar bg="light" expand="lg" className="w-100 bg-transparent">
                <BootstrapNavbar.Brand as={Link} to="/"><img src={Logo} width="50" alt="Careerado"/></BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="text-dark mr-4">Home</Nav.Link>
                        {
                            currentUser?
                            <div>
                                <Dropdown className="p-0"> 
                                    <Dropdown.Toggle variant="white" className="p-1 shadow-none">
                                        <img height="30" width="30" src={currentUser.photoURL || undefined} alt="Profile" className={"mr-2 "+styles.profile_pic}/>
                                        {currentUser.displayName}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="pt-0 pb-0">
                                        <Nav.Link as={Link} to="/signout" className="text-dark text-center">Sign Out</Nav.Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>                          
                            :
                            <Nav.Link as={Link} to="/login" className="text-dark mr-4">Login</Nav.Link>
                        }
                        
                    </Nav>
                </BootstrapNavbar.Collapse>
            </BootstrapNavbar>
        </div>
    )
}

