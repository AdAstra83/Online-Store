import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';
import './Auth.css';

const Auth = observer( () => {
  const {user} = useContext(Context)
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container
    className="auth-container"
    style={{height: window.innerHeight -54}}>
      <Card className="auth-card">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registeration'} </h2>
        <Form className="auth-form">
          <Form.Control
            className="form-control"
            placeholder="Enter your email..."
            value={email}
            onChange = {e => setEmail(e.target.value)}
          />
          <Form.Control
            className="form-control"
            placeholder="Enter password..."
            value={password}
            onChange = {e => setPassword(e.target.value)}
            type="password"
          />
          <Col className="auth-column">
            {isLogin ?
             <div>
               Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Sign up!</NavLink>
            </div>
            :
              <div>
                Have an account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
              </div>
            }
            <Button 
            variant={'outline-success'}
            onClick={click}>
              {isLogin ? 'Log in' : 'Register'}
            </Button>
          </Col>
        </Form>
      </Card>
    </Container>
  )
});

export default Auth;
