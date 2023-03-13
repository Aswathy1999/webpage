import React from "react";
import { connect } from 'react-redux';
import { getStudentList, deleteStudent } from '../actions/studenteActions';

class StudentList extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
      this.props.getStudentList();
   }
   handleDelete = (id, e) => {
      e.preventDefault();
      this.props.deleteStudent(id);
   }
   
   render() {
      let lists = [];
      if (this.props.students != null) {
         lists = this.props.students.map((item) =>
            <tr key={item.id}>
               <td>{item.name}</td>
               <td>{new Date(item.Date).toDateString()}</td>
               <td>{item.class}</td>
               <td>{item.division}</td>
               <td>{item.gender}</td>
               <td><a href="#"
                  onClick={(e) => this.handleDelete(item.id, e)}>Remove</a>
               </td>
            </tr>
         );
      }
      return (
         <div>
            <table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Date of Birth</th>
                     <th>Class</th>
                     <th>Division</th>
                     <th>Gender</th>
                     <th>Remove</th>
                  </tr>
               </thead>
               
            </table>
         </div>
      );
   }
}
const mapStateToProps = state => {
   return {
      students: state.data
   };
};
const mapDispatchToProps = {
   getStudentList,
   deleteStudent
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(StudentList);
