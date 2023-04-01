import React from 'react'
import './EntryCard.css'
import {BsFillTrashFill} from 'react-icons/bs'

const EntryCard = (props) => {
    
    const {text,value,date,id,data,setData} = props;

    const entryCardColor=['one','two','three','four']

    const myColor = entryCardColor[id%4]

    const deleteCard = () => {
        console.log('deleted')
        const newData = data.filter( e => e.id !== id)
        localStorage.setItem('my-project-data',JSON.stringify(newData))
        setData(newData)
    }

    return (
        <div className='entryCard' id={myColor} key={id}>
            <h3>{text}</h3>
            <h4>{value} RON</h4>
            <div className='entryCardDate'>
                <h4>{date}</h4>
                <button className='deleteEntry' onClick={deleteCard}><BsFillTrashFill/></button>
            </div>
        </div>
    )
}

export default EntryCard