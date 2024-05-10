import React, { useEffect } from "react";
import Employee from "../Employee/Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employeeData,setEmployeeData] = useState([])
  const [petData, setPetData] = useState([])
  
  useEffect(() => {
  
    fetch ('https://vet-app-0obi.onrender.com/api/employees')
    .then((employeeList) => employeeList.json())
    .then ((employeeList) => setEmployeeData(employeeList))

    fetch('https://vet-app-0obi.onrender.com/api/pets')
    .then((petList) => petList.json())
    .then((petList) => setPetData(petList))

    

  })
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {employeeData.map(dataObj => {
        return <Employee petData = {petData} dataObj ={dataObj} key={dataObj.id}/>

      })}
        
      </section>
    </main>
  );
};

export default EmployeeList;
