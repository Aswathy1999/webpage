
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';



function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                     
                          <Route path = "/" exact component = {ListStudentComponent}></Route>
                          <Route path = "/students" component = {ListStudentComponent}></Route>
                          <Route path = "/add-student/:id" component = {CreateStudentComponent}></Route>
                          <Route path = "/view-student/:id" component = {ViewStudentComponent}></Route>
                          <Route path = "/update-student/:id" component = {UpdateStudentComponent}></Route> 
                    
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;