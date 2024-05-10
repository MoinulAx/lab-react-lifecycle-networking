import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({dataObj,petData}) => {
  const[visiblity,setVisiblity] = useState(false)

  function toggleContent(){
    setVisiblity(!visiblity)
  }
  const employeePets = petData.filter(ele =>{
    if(dataObj.id === ele.employeeId){
      return ele.name

    }
  })
  return (
    <article className="employee">
      <h3>{`${dataObj.prefix} ${dataObj.firstName} ${dataObj.lastName}`}</h3>
      <h4>{`${dataObj.title}`}</h4>
      <button onClick={toggleContent}>{visiblity? 'Hide pets' :'Show Pets'}</button>

      <PetList visiblity={visiblity} setvisiblity = {setVisiblity} employeePets={employeePets}/>
    </article>
  );
};

export default Employee;
