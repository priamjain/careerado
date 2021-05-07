import React, { useContext } from 'react'
import { Dropdown, Nav, Navbar as BootstrapNavbar} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../../assets/logo.png'
import { AuthContext } from '../../../../context/AuthContext'
import styles from './Navbar.module.css'
export const Navbar = () => {
    const currentUser = useContext(AuthContext);
    console.log(currentUser)
    return (
        <div className="d-flex pt-3 w-100">
            <BootstrapNavbar bg="light" expand="lg" className="w-100 bg-transparent">
                <BootstrapNavbar.Brand as={NavLink} to="/"><img src={Logo} width="50" alt="Careerado"/></BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link exact as={NavLink} to="/" className="ml-3 text-dark" activeClassName="border-bottom">Home</Nav.Link>
                        <Nav.Link exact as={NavLink} to="/aboutus" className="ml-3 text-dark" activeClassName="border-bottom">About Us</Nav.Link>
                        <Nav.Link exact as={NavLink} to="/roadmap" className="ml-3 text-dark" activeClassName="border-bottom">Roadmaps</Nav.Link>
                        {
                            currentUser?
                            <div className="mr-auto">
                                <Dropdown className=""> 
                                    <Dropdown.Toggle variant="white" className="shadow-none">
                                        <img height="30" width="30" src={currentUser.photoURL || undefined} alt="Profile" className={"mr-2 "+styles.profile_pic}/>
                                        {currentUser.displayName}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="p-0 ml-5">
                                        <Nav.Link exact as={NavLink} to="/signout" className="text-dark text-center">Sign Out</Nav.Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>                          
                            :
                            <Nav.Link as={Link} to="/login" className="ml-3 text-dark">Login</Nav.Link>
                        }
                        
                    </Nav>
                </BootstrapNavbar.Collapse>
            </BootstrapNavbar>
        </div>
    )
}

