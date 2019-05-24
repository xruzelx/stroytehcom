import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Service from './Service';
import ServiceBuild from './Service-Build';
import ServiceBase from './Service-Base';
import ServiceFacade from './Service-Facade';
import ServiceFinish from './Service-Finish';
import ServicePavilion from './Service-Pavilion';
import ServiceRoof from './Service-Pavilion';
import Project from './Project';
import Contact from './Contact';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }


  render() {
    return (
      <div className="wrapper">
      <Router>
        {this.state.isOpen && <div class="sidebar">
          <div className="d-flex flex-column h-100">
              <NavLink to="/" exact onClick={() => this.toggleMenu()} className="sidebar-nav">Главная</NavLink>
              <NavLink to="/service/" onClick={() => this.toggleMenu()} className="sidebar-nav">Наши услуги</NavLink>
              <NavLink to="/project/" onClick={() => this.toggleMenu()} className="sidebar-nav">Наши проекты</NavLink>
              <NavLink to="/contact/" onClick={() => this.toggleMenu()} className="sidebar-nav">Наши контакты</NavLink>
          </div>
        </div>}
        <div  className= {this.state.isOpen? 'main-content main-content-opened': 'main-content'}>
        {this.state.isOpen && <div class="shadow-bg" onClick={() => this.toggleMenu()}></div>}
          <div className="main">
            <div className="d-flex app-header">
              <button className="sidebar-button" onClick={() => this.toggleMenu()}><i></i></button>
              <Header />
            </div>
            
              <div className="align-items-center header-menu">
                  <div className="d-flex align-items-center main-container h-100">
                      <NavLink to="/" exact className="d-flex h-100 align-items-center">Главная</NavLink>
                      <NavLink to="/service/" className="d-flex h-100 align-items-center">Наши услуги</NavLink>
                      <NavLink to="/project/" className="d-flex h-100 align-items-center">Наши проекты</NavLink>
                      <NavLink to="/contact/" className="d-flex h-100 align-items-center">Наши контакты</NavLink>
                  </div>
              </div>
              <div>             
                  <Route path="/" exact component={Main} />
                  <Route path="/service/" exact component={Service} />
                  <Route path="/project/" component={Project} />
                  <Route path="/contact/" component={Contact} />
                  <Route path="/service/build/" component={ServiceBuild} />
                  <Route path="/service/base/" component={ServiceBase} />
                  <Route path="/service/facade/" component={ServiceFacade} />
                  <Route path="/service/finish/" component={ServiceFinish} />
                  <Route path="/service/pavilion/" component={ServicePavilion} />
                  <Route path="/service/roof/" component={ServiceRoof} />
              </div>
            <Footer />
          </div>
        </div>
        </Router>
      </div>
      
      
    );
  }
}

export default App;
