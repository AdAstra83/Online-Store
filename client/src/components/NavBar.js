import React, { useContext, useState } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import ModalBasket from './modals/ModalBasket'
import './NavBar.css'
import { FaShoppingCart } from "react-icons/fa";


const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem('token')
    }

    const [modalShow, setModalShow] = useState(false);


  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className='navbar__navlink' to={SHOP_ROUTE}>Store</NavLink>
          <Button className='navbar__cart'variant={"outline-light"} onClick={() => setModalShow(true)}>
            <FaShoppingCart/>
            </Button>
          {user.isAuth 
          ? <Nav className="navbar__admin">
              <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Admin panel</Button>
              <Button variant={"outline-light"} onClick={() => logOut()} className="navbar__logout">Log out</Button>
            </Nav>
          :
            <Nav className="navbar__auth">
              <Button variant={"outline-light"} onClick = {() => navigate(LOGIN_ROUTE)}>Authorization</Button>
            </Nav>
          }
          <ModalBasket
          show={modalShow}
          onHide={() => setModalShow(false)}/>
        </Container>
      </Navbar>
  )
});

export default NavBar;
