import React from "react";
import {
   BrowserRouter as Router,
   Link,
   Switch,
   Route
} from 'react-router-dom';
import React, { Component } from 'react';
import './components/Application.css';
import Home from './components/Home';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

class App extends React.Component {
   render() {
      return (
         <Router>
            <div>
               <nav>
                  <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/list">List Student Details</Link></li>
                     <li><Link to="/add">Add Student</Link></li>
                  </ul>
               </nav>

               <Switch>
                  <Route path="/list">
                     <div style={{ padding: "10px 0px" }}>
                        <StudentList />
                     </div>
                  </Route>
                  <Route path="/add">
                     <div style={{ padding: "10px 0px" }}>
                        <StudentForm />
                     </div>
                  </Route>
                  <Route path="/">
                     <div>
                        <Home />
                     </div>
                  </Route>
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;