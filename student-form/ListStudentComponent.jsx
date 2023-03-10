import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/add-student/${id}`);
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add-student/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Students List</h2>
                 <div className = "row">
                    <button className="add-student" onClick={this.addStudent}> Add Student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table structure">

                            <thead>
                                <tr>
                                    <th> Student First Name</th>
                                    <th> Student Last Name</th>
                                    <th> Date</th>
                                    <th> Class</th>
                                    <th> Division</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr key = {student.id}>
                                             <td> { student.firstName} </td>   
                                             <td> {student.lastName}</td>
                                             <td> {student.date}</td>
                                             <td> {student.class}</td>
                                             <td> {student.division}</td>
                                             <td>
                                                 <button onClick={ () => this.editStudent(student.id)} className="button">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.id)} className="button-delete">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="button-view">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListStudentComponent