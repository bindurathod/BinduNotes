import React, {Component} from 'react';
//import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, NavItem,  FormControl,Button,NavLink} from 'react-bootstrap';
import {BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
import Searchbox1 from './Searchbox1';
import Searchlist from './Searchlist';
//import About from './About';
//import Nav from './components/Navbar/Navigation';
//import Home from './Home';

class Navigation extends React.Component{
    render(){
        return(

<Router>
<div className="App">
  
  
<Navbar fixed="top" bg="white" expand="lg">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     <NavLink href="#home"><Link to="/">WareHouse</Link></NavLink>
     <NavLink href="#link"><Link to="/list">List</Link></NavLink>
     
    </Nav>
     </Navbar.Collapse>
</Navbar>

<Route path="/list">
<Searchlist />

</Route>
<Route path="/">
<Searchbox1 />

</Route>

<Switch>


</Switch>
</div>
</Router>
    )
    }
};
export default Navigation;












