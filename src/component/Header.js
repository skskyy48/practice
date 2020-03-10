import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import './Header.scss'

const Header = () => {
    return(
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link exact href="/">홈</Nav.Link>
                    <Nav.Link exact href="/fixtures">경기 일정</Nav.Link>
                    <Nav.Link exact href="/leagues">기록/순위</Nav.Link>
                </Nav>
            </Navbar>
    )
}

export default Header