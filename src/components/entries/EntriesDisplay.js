import React from 'react'
import './AddEntry.css'
import EntriesContainer from './EntriesContainer'
import SortTab from './SortTab'
import { useState } from 'react'

export const EntriesDisplay = (props) => {

    const {data,setData} = props;
    const [display,updateDisplay] = useState(0)
    return (
        <div className='entriesDisplay'>
            <SortTab data={data} setData={setData} updateDisplay = {updateDisplay} display={display}/>
            <EntriesContainer data={data} setData={setData} />
        </div>
    )
}

export default EntriesDisplay