import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "create-student">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "body">
                        <div className = "row">
                            <label> Student First Name: </label>
                            <div> { this.state.student.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Student Last Name: </label>
                            <div> { this.state.student.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Date: </label>
                            <div> { this.state.student.date }</div>
                        </div>
                        <div className = "row">
                            <label> Student class: </label>
                            <div> { this.state.student.class }</div>
                        </div>
                        <div className = "row">
                            <label> Student Division: </label>
                            <div> { this.state.student.division }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStudentComponent