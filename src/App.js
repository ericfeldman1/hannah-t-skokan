import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import VideosPage from './VideosPage'
import PhotosPage2 from './PhotosPage2'
import ResumePage from './ResumePage'
import ContactPage from './ContactPage'
import NotFoundPage from './NotFoundPage'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./sidebar";

export default class App extends Component {
  render() {
    return (
      <div className='App'>
              <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        {/* <nav>
          <Nav />
        </nav> */}
        {/* <header>
          <Header />
        </header> */}
        <main>
          <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/videos' component={VideosPage} />
        <Route path='/photos' component={PhotosPage2} />
        <Route path='/resume' component={ResumePage} />
        <Route path='/contact' component={ContactPage} />
        <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
