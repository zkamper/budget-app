import React from 'react'
import { useState } from 'react';
import './SortTab.css'

const SortTab = (props) => {

    const {data,setData,updateDisplay,display} = props

    const [selectedValue, setSelectedValue] = useState('');

    const sort_alpha = (a,b) => {
        if(a.text === b.text) {
            return 0;
        }
    
        if (a.text > b.text) {
            return 1;
        }
        return -1;
    }
    const sort_date = (a,b) => {
        if(a.date === b.date) {
            return 0;
        }
    
        if (a.date > b.date) {
            return -1;
        }
        return 1;
    }

    const sort_value = (a,b) => {
        return a.value-b.value
    }
    function handleChange(event) {
        let value = event.target.value
        setSelectedValue(value);
        let newData
        switch(value){
            case 'alpha':
                newData = data.sort(sort_alpha)
                break;
            case 'date':
                newData = data.sort(sort_date)
                break;
            case 'sum':
                newData = data.sort(sort_value)
                break;
            default:
                break;
        }
        console.log(newData)
        localStorage.setItem('my-project-data',JSON.stringify(newData))
        setData(newData)
        let update = !display
        updateDisplay(update)
    }
    return (
        <div className='sortTab'>
            <h2>Sort by:</h2>
            <label>
                <input type='radio' value='alpha' checked={selectedValue==='alpha'} onChange={handleChange} />
                Name
            </label>
            <label>
                <input type='radio' value='date' checked={selectedValue==='date'} onChange={handleChange} />
                Date
            </label>
            <label>
                <input type='radio' value='sum' checked={selectedValue==='sum'} onChange={handleChange} />
                Sum spent
            </label>
        </div>
    )
}

export default SortTab