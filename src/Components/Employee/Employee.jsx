import PetList from "../PetList";
import "./Employee.css";

export const Employee = ({dataObj,petData}) => {
  return (
    <article className="employee">
      <h3>{`${dataObj.prefix} ${dataObj.firstName} ${dataObj.lastName}`}</h3>
      <h4>{`${dataObj.title}`}</h4>
      <button onClick={}>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;
