import { useState } from "react";

const NavBar = ({ onSearch }) => {

    const [search, setSearch] = useState('');

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleInputKeyDownd = (e) => {
        if (e.key === 'Enter') {
            onSearch(search);
        }
    };

    return (
        <div>
            <p>Mi boletera</p>
            <input
                placeholder="Busca tu evento favorito..."
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDownd}
                value={search}
            ></input>
        </div>
    );
};

export default NavBar;