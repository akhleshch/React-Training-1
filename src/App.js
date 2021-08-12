/* eslint-disable no-unused-vars */

import DatePicker from 'react-datepicker';

import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import CountryList from './CountryList';
import Gender from './Component/Gender-component';
import { RangeStepInput } from 'react-range-step-input';
import Select from 'react-select';
import { list } from './mock/mock-list';
// import Table  from './Component/Table-component';


const App = () => {
  // const [age, setAge] = useState(0);
  // const [startDate, setStartDate] = useState(new Date());
  // const [name, setName] = useState("");
  // const [hobbey, sethobbey] = useState("");
  // const [country, setCountry] = useState("");

  const [formDetail, setFormDetails] = useState({ name: "", file: "", dob: "", country: "", gender: "", age: "" });

  var formlist = [];

  const [count, setCount] = useState(0)

  const handleAdd = (e) => {
    // var count = setCount()

    // alert(e.label)
    console.log("country---------", formDetail);
    setFormDetails({ ...formDetail, gender: e })
  }

  const onCountryChanged = (e) => {
    console.log("country---------", formDetail);
    setFormDetails({ ...formDetail, country: e.label })
  }

  const onHobbeyChanged = (hobbey) => {
    // setName(hobbey.target.value)
  }


  const onNameChanged = (e) => {
    setFormDetails({ ...formDetail, name: e.target.value })
    console.log("Form Details--------", formDetail);
  }
  const onDateChanged = (e) => {
    setFormDetails({ ...formDetail, dob: e })
    console.log("Form Details--------", formDetail);

  }

  const onAgeChanged = (e) => {
    console.log("Age---------", formDetail);
    setFormDetails({ ...formDetail, age: e.target.value })
  }

  const onGenderChanged = (e) => {
    console.log("Gender Working---------", formDetail);
    setFormDetails({ ...formDetail, gender: e.target.value })
  }

  

  const onSubmit = () => {

    if (formDetail.name === '') {
      alert("Please enter name");
      return false;
    }
    if (formDetail.dob === '') {
      alert("Please enter a dob");
      return false;
    }
    if (formDetail.country === '') {
      alert("Please enter a country");
      return false;
    }
    if (formDetail.country === '') {
      alert("Please enter a country");
      return false;
    }

    if (formDetail.age === '0') {
      alert("Please enter a age");
      return false;
    }

    console.log("Submit---------");
    formlist.push(formDetail);
    console.log(formlist);
  }

  return (
    <div className="container">
      <form>
        <h1>User From</h1>
        <div className="form-group">
          <label>Name :</label>
          <input className="form-control" type="text" value={formDetail.name} onChange={onNameChanged} placeholder="FirstName..." />
        </div>

        {/* {formDetail.name ? (<div>
          style={{fontSize:10 ,color:"red"}}
        </div>): null} */}
        <div className="form-group">
          <label>Attacthment :</label>
          <input className="form-control" type="file" />
        </div>
        <div className="form-group">
          <label>DOB :</label>

          <DatePicker
            selected={formDetail.dob} onChange={(date) => onDateChanged(date)}
          />

        </div>
        <div className="form-group">
          <label>Country :</label>

          {/* <CountryList onContryChanged={onCountryChanged} /> */}
          <Select onChange={(country) => onCountryChanged(country)} options={list} />
        </div>
        <div className="form-group">
          <label>Select Gender :</label>
          <div>
            <Gender handleAdd={handleAdd} />
          </div>
        </div>
        <div className="form-group range">
          <label>Select Age :</label><br />
          {/* <RangeStepInput /> */}
          <RangeStepInput
            onChange={onAgeChanged}
            value={formDetail.age}
          />
          <label>{formDetail.age} </label>
        </div>
      </form>
      <button onClick={onSubmit} className="btn btn-primary">
        SUBMIT
      </button>
      <div>
      </div>

    </div>
  );
}

export default App;
