import "./pet.css";


export const PetList = ({employeePets,visiblity,setVisiblity}) => {
  
  
  return (
    <aside className="pets-list">
      <div onClick={() => setVisiblity(!visiblity)}>
            
        {visiblity && 
            <div className="menu" onClick={() => setVisiblity(!visiblity)}>

              {employeePets.map(pets =>{
                return (<p>{`${pets.name}, `}</p>)
              })}
           </div>  }  
           </div> 
    </aside>
  );
};

export default PetList;
