import React, { useState } from 'react'
import '../../styles/AddEntry.css'

const AddEntry = (props) => {

    const { data, setData } = props;

    const [formData, setFormData] = useState({
        text: '',
        date: '',
        value: 0.0,
        id: 0
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        formData.id=Math.floor(Math.random()*10000)
        let newArr = [...data,formData]
        localStorage.setItem('my-project-data',JSON.stringify(newArr))
        console.log(formData)
        setData(newArr)
        console.log(newArr)
        
    };

    return (
        <div className='addEntry'>
            <h2>Add Entry</h2>
            <form action='' method='get' className='myform' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='text'>Description:</label>
                    <input type='text' name='text' value={formData.text} onChange={handleChange} required></input>
                </div>
                <div>
                    <label htmlFor='date'>Date:</label>
                    <input type='date' name='date' value={formData.date} onChange={handleChange} required></input>
                </div>
                <div>
                    <label htmlFor='value'>Value:</label>
                    <input type='number' step='0.01' name='value' value={formData.value} onChange={handleChange} required></input>
                </div>
                <button type='submit' className="submitButton">Add Entry</button>
            </form>
        </div>
    )
}

export default AddEntry