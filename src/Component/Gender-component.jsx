
import React from "react";
export default function Gender({handleAdd}) {
  
  const data ="Akhlesh"

    return (

      <div >
        <input type="radio" onClick={()=>handleAdd("Male")}  value="Male" name="gender" /> Male
        <input type="radio" onClick={()=>handleAdd("Female")} value="Female" name="gender" /> Female
        <input type="radio" onClick={()=>handleAdd("Other")}   value="Other" name="gender" /> Other
        
        <button onClick={()=>handleAdd.handleAdd("Akki")}>click</button>

      </div>


       
      
    );
  }
