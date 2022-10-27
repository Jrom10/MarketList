import { React } from "react";
import { useState } from "react";
import MarketItem from "./MarketItem";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';

function MarketList() {

    const [list, setlist] = useState("")
    const [itemArray, setItemArray] = useState([])
    const [orderId, setOrderId] = useState('')
    const [loader,setLoader] =useState (false)

    function handleChange(e) {
        const value = e.target.value
        setlist(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newItem = {
            id: crypto.randomUUID(),
            name: list,
        }

        setItemArray([...itemArray, newItem])
        setlist("")
    }

    function handleDelete(id) {
        setItemArray(itemArray.filter((item)=>item.id!==id))
    }

    function handleEdit(id, name) {
        const template = [...itemArray]
        let prod = template.find((item)=>item.id===id)
        prod.name = name
        setItemArray(template)
    }

    function handleClear() {
        setItemArray([])
    }

    function handleSend(e) {
        e.preventDefault()
        const saveList = collection (db,"savelist")
        addDoc(saveList,{
            items: itemArray,
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            handleClear()
        })
        .catch((error)=> console.log(error))
        .finally(()=>setLoader(false))
    }


    return (
        <>
            <div className="listContainer">
                <form className="listCreateForm" onSubmit={handleSubmit}>
                    <input onChange={handleChange} className="listInput" value={list} placeholder="Ingresar producto"/>
                    <input onClick={handleSubmit} type="submit" value="Agregar" className="button"/>
                </form>
            </div>
            <div className="itemContainer">
                {itemArray.map((item)=><MarketItem key={item.id} item={item} onDelete={handleDelete} onEdit={handleEdit}/>)}
            </div>
            <div className="buttonSave">
                <button onClick={handleSend} className="button">Guardar</button>
            </div>
        </>
    )
}

export default MarketList;