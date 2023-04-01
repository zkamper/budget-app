import React, { useEffect } from 'react'
import './EntriesContainer.css'
import EntryCard from './EntryCard';

const EntriesContainer = (props) => {

    const {data,setData} = props;

    const dataCards = []
    
    for(const e of data){
        const card = <EntryCard text = {e.text} value = {e.value} id={e.id} date={e.date} data={data} setData={setData}/>
        dataCards.push(card)
    }

    return (
        <div className='entriesContainer'>
            {dataCards}
        </div>
    )
}

export default EntriesContainer