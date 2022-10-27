import { useState } from "react";
import { React } from "react";

function MarketItem({item,onDelete,onEdit}) {
    
    const[edit, setEdit] = useState(false)
    const[newValue, setNewValue] = useState(item.name)

    function handleChange(e) {
        const value = e.target.value
        setNewValue(value)
    }

    function handleClick() {
        onEdit(item.id, newValue)
        setEdit(false)
    }

    return ( 
        <div>
            {edit ?
                <form>
                    <input onChange={handleChange} className="listInput" placeholder={item.name}/>
                    <button onClick={handleClick}>Modificar</button>
                </form>
            :
                <div>
                    {item.name}
                    <button onClick={()=>setEdit(true)}>Edit</button>
                    <button onClick={()=>onDelete(item.id)}>Borrar</button>
                </div>
            }       
        </div>
    );
}

export default MarketItem;