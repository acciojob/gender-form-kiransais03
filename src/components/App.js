
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [gendress,setGendress] = useState("male");
  let [genselec,setGenselec] = useState("shirt")

  function trigger(e) {
    console.log(e.target.value)
  }

 function genderselected (e)
 {
    if(e.target.value==="male")
    {
      setGendress("male");
      setGenselec("shirt");
    }
    else {
      setGendress("female");
      setGenselec("dress");
    }
 }

  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <label htmlFor="gender">Select your gender:</label> <br/>
          <input type="radio" onChange={(e)=>{genderselected(e)}} defaultChecked name="gen" id="gender1" value="male"/>
          <label htmlFor="gender1">Male</label>
          <input type="radio" onChange={(e)=>{genderselected(e)}} name="gen" id="gender2" value="female"/>
          <label htmlFor="gender2">Female</label> <br/>
          <label htmlFor="size">Select your {genselec} size:</label> <br/>

          {(gendress==="male") && <select onChange={(e)=>{trigger(e)}}>
            <option disabled>Select size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select> }

         {(gendress==="female") && <select onChange={(e)=>{trigger(e,e.target.value)}}>
            <option value="">Select size</option>
            <option>2</option>
            <option>4</option>
            <option>6</option>
          </select> }
        </form>
    </div>
  )
}

export default App
