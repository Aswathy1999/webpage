import {
    getStudentListStarted, getStudentListSuccess, getStudentListFailure,
    addStudentStarted, addStudentSuccess, addStudentFailure,
    deleteStudentStarted, deleteStudentSuccess, deleteStudentFailure
 } from "./index";
 export const getStudentList = () => async dispatch => {
    dispatch(getStudentListStarted());
    try {
       const res = await fetch('http://localhost:8000/api/students');
       const data = await res.json();
       var items = [];
       data.forEach((item) => {
          let newItem = {
             id: item._id,
             name: item.name,
             date: item.date,
             class: item.class,
             division: item.division,
             gender: item.gender

          }
          items.push(newItem)
       });
       dispatch(getStudentListSuccess(items));
    } catch (err) {
       dispatch(getStudentListFailure(err.message));
    }
 }
 export const addStudent = (data) => async dispatch => {
    dispatch(addStudentStarted());
 
    let newItem = {
       name: data.name,
       date: data.date,
       class: data.class,
       division: data.division,
       gender: data.gender
       
    }
    console.log(newItem);
    try {
       const res = await fetch('http://localhost:8080/api/student', {
          method: 'POST',
          body: JSON.stringify(newItem),
          headers: {
             "Content-type": "application/json; charset=UTF-8"
          } 
       });
       const data = await res.json();
       newItem.id = data._id;
       dispatch(addStudentSuccess(newItem));
    } catch (err) {
       console.log(err);
       dispatch(addStudentFailure(err.message));
    }
 }
 export const deleteStudent = (id) => async dispatch => {
    dispatch(deleteStudentStarted());
    try {
       const res = await fetch('http://localhost:8080/api/student/' + id, {
          method: 'DELETE'
       });
       const data = await res.json();
       dispatch(deleteStudentSuccess(id));
    } catch (err) {
       dispatch(deleteStudentFailure(err.message));
    }
 }
 