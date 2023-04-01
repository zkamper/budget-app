import React from 'react'
import EntriesContainer from './EntriesContainer'
import SortTab from './SortTab'
import { useState } from 'react'
import '../../styles/EntriesDisplay.css'

export const EntriesDisplay = (props) => {

    const { data, setData } = props;

    //Used to force a refresh upon sorting the entries
    const [display, updateDisplay] = useState(0)

    return (
        <div className='entriesDisplay'>
            <SortTab data={data} setData={setData} updateDisplay={updateDisplay} display={display} />
            <EntriesContainer data={data} setData={setData} />
        </div>
    )
}

export default EntriesDisplay