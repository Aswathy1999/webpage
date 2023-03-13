import React from "react";
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withRouter } from "react-router-dom";
import { addStudent } from '../actions/studentActions';

class StudentForm extends React.Component {
   constructor(props) {
      super(props);

      this.initialValues = { name: '', date: '', class: '', division: '', gender: '' }
   }
   validate = (values) => {
      const errors = {};
      if (!values.name) {
         errors.name = 'Required';
      }
      if (!values.date) {
         errors.date = 'Required';
      }
      if (!values.class) {
         errors.class = 'Required';
      }
      if (!values.division) {
         errors.division = 'Required';
      }
      if (!values.gender) {
         errors.gender = 'Required';
      }
      return errors;
   }
   handleSubmit = (values, setSubmitting) => {
      setTimeout(() => {
         let newItem = {
            name: values.name,
            date: values.date,
            class: values.class,
            division: values.division,
            gender: values.gender
         }
         this.props.addStudent(newItem);
         setSubmitting(false);
         this.props.history.push("/list");
      }, 400);
   }
   render() {
      return (
         <div id="studentForm">
            <Formik
               initialValues={this.initialValues}
               validate={values => this.validate(values)}
               onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)}>
               {
                  ({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                     /* and other goodies */
                  }) => (
                     <form onSubmit={handleSubmit}>
                        <label for="name">Name <span>{errors.name && touched.name && errors.name}</span></label>
                        <input type="text" id="name" name="name" placeholder="Enter Name:"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name} />

                        <label for="date">Date <span>{errors.date && touched.date && errors.date}</span></label>
                        <input type="date" id="date" name="date" placeholder="Enter date of birth:"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.date} />

                       <label for="class">Class <span>{errors.class && touched.class && errors.class}</span></label>
                        <select id="class" name="class"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.class}>
                           <option value="">Select</option>
                           <option value="A">A</option>
                           <option value="B">B</option>
                           <option value="C">C</option>
                        </select>

                        <label for="division">Division <span>{errors.division && touched.division && errors.division}</span></label>
                        <select id="division" name="division"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.division}>
                           <option value="">Select</option>
                           <option value="I">I</option>
                           <option value="II">II</option>
                           <option value="III">III</option>
                           <option value="IV">IV</option>
                           <option value="V">V</option>
                           <option value="V1">V1</option>
                           <option value="V11">V11</option>
                           <option value="V111">V111</option>
                           <option value="1X">IX</option>
                           <option value="X">X</option>
                           <option value="X11">X11</option>
                           <option value="X12">X12</option>
                        </select>

                        <div onChange={this.setGender.bind(this)}>
                        <input type="radio" value="MALE" name="gender"/> Male
                        <input type="radio" value="FEMALE" name="gender"/> Female
                        </div>

                     <input type="submit" value="Submit" disabled={isSubmitting} />
                     </form>
                  )
               }
            </Formik>
         </div>
      )
   }
}
const mapDispatchToProps = {
   addStudent,
};
export default withRouter(connect(
   null,
   mapDispatchToProps
)(StudentForm));