import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';

const Menu = () => {
  return (
    <>
    <nav className="navbar">
    <Container className='content-navbar'>
        <div>
        <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
        </div>
      </Container>
    </nav>
    </>
  )}
export default Menu