import logo from './logo.svg';
import './App.scss';
import Header from './components/header';
import Home from './components/Home';
import DisplayTodo from './components/DisplayTodo';
import AddTodo from './components/AddTodo';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Product';
import Nav from './components/Navigation/Nav.App';
import OTP from './OTP/OTP';
import User from './components/Server/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-18-image-lightbox/style.css';
import { Button, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';






const App = () => {
  const x = [1, 2, 3, { name: 'XoX' }]
  // console.log('Value', x);
  console.log(axios.isCancel('something'));
  return (
    <Router>
      <Container className=''>

        <Header />

        {/* <div className='body-compoment'>

          <div className='content-left'>
            <Home />
            <Nav />
            {/* <p style={{ textTransform: 'uppercase' }}>
        Gia tri cua X: {JSON.stringify(x)}
        {console.log('gia tri cua x: ', (x))}
      </p> 
          </div>
          <div className='content-right'>
            <AddNewProduct />
            <hr />
            <Product />
          </div>

        </div> */}

        <Switch>
          <Route path="/" exact={true}>

          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addnewproduct">
            <AddNewProduct />
          </Route>
          <Route path="/otp">
            <OTP />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="*">
            <div>404 Not Foun!</div>
          </Route>
        </Switch>
        {/* <Link to='/'>Ahihi</Link> */}


      </Container>
    </Router>
  );

}

export default App;

