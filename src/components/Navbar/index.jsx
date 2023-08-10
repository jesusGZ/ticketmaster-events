import { useState } from "react";

const NavBar = ()=>{

   const [search,setSearch]= useState('');

    const handleInputChange=(e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    return(
        <div>
            <p>Mi boletera</p>
            <input 
            placeholder="Busca tu evento favorito..."
             onChange={handleInputChange}
             value={search}
             ></input>
        </div>
    );
};

export default NavBar;