import React, {component} from 'react';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            date: '',
            class:'',
            division:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.UpdateStudent = this.UpdateStudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({firstName: student.firstName,
                    lastName: student.lastName,
                    date: student.date,
                    class : student.class,
                     division : student.division
                });
            });
        }        
    }
    UpdateStudent = (e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, lastName: this.state.lastName, date: this.state.date,class: this.state.class,division: this.state.division};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/students');
            });
        }else{
            StudentService.UpdateStudent(employee, this.state.id).then( res => {
                this.props.history.push('/students');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    changeClassHandler= (event) => {
        this.setState({Class: event.target.value});
    }
    changeDivisionHandler= (event) => {
        this.setState({division: event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "create-student">
                                {
                                    this.getTitle()
                                }
                                <div className = "body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label for="class">Class</label>
                                            <select id="class" name="class"
                                            value={this.state.item.class}
                                            onChange={this.changeClassHandler} >
                                            <option value="">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            </select>

                                        </div>
                                        <div className = "form-group">
                                            <label for="division">Division</label>
                                            <select id="division" name="division"
                                            value={this.state.item.division}
                                            onChange={this.changeDivisionHandler} >
                                            <option value="">Select</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            </select>

                                        </div>


                                        <button className="button-update" onClick={this.UpdateStudent}>Update</button>
                                        <button className="button-cancel" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateStudentComponent