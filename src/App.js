import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from './Navigation';
import SearchFilter from './SearchFilterWrapper';
import CoursesList from './CoursesList';
import Course from './Course';
import Menu from './MainMenu';
import { courses } from './courses';
import './svl-app.scss';
import './fontawesome';
import pic from './user.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        firstName: 'Test',
        lastName: 'User',
        field: 'Front End Developer',
        pic: pic
      },
      courses: courses,
      filters: [],
      mainMenu: false,
      query: ''
    }
  }

  // Sets Filter
  setfilter = (x) => {
    let filters = [];
    if (this.state.filters.includes(x)) {
      filters[0] = ''
    } else {
      filters.push(x);
    }
    this.setState({
      filters
    })
  }

  // Sets search query
  setQuery = (e) => {
    this.setState({query: e})
  }
  // Clears searbox
  clearQuery = () => {
    this.setState({query: ''})
  }
  
  // Opens and Closes Main Menu
  toggleMenu = () => {
    if (this.state.mainMenu) {
      this.setState({ mainMenu: false})
    } else {
      this.setState({ mainMenu: true})
    }
  }




  render() {
    const { user, courses, filters, mainMenu } = this.state;
    return (
      <div className="wrapper-main">

         {/* Menu */}
        <Menu user={user} mainMenu={mainMenu} toggleMenu={this.toggleMenu} />
  
        {/* Navigation Bar */}
          <Navigation toggleMenu={this.toggleMenu} user={user} />

        <Router>

          <Route exact path="/" render={() => {
            return (
              <div className="page__wpr">
                <SearchFilter setfilter={(x) => this.setfilter(x)}
                  setQuery={(x) => this.setQuery(x)}
                  filters={filters}
                  clearQuery={() => this.clearQuery()} />
                <CoursesList courses={courses} filters={filters} />
              </div>
            )}}>
          </Route>

          <Route path="/courses/:title" render={({match}) => {
            return <Course course={courses.find(course => course.title === match.params.title)} />
            }}>
          </Route>

        </Router>

       
      </div>
    );
  }
}

export default App;
