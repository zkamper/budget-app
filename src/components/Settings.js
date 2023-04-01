import './Settings.css'

function Settings(props){

    const {budget,setBudget,setData} = props

    const handleBudget = (event) => {
        event.preventDefault();
        let newBudget = event.target.value
        localStorage.setItem('my-project-budget',JSON.stringify(newBudget))
        setBudget(newBudget)
    }

    const deleteData = () => {
        let confirmation = window.confirm("Are you sure you want to delete your data?")
        if(confirmation){
            localStorage.removeItem('my-project-data');
            setData([]);
        }
    }

    return (
        <div className='settings'>
            <h1>Settings</h1>
            <form>
                <label htmlFor='text'>Change Budget:</label>
                <input type='number' name='text' value={budget} onChange={handleBudget}></input>
            </form>
            <button type='button' className="deleteButton" onClick={deleteData}>Delete Data</button>
        </div>
    )
}

export default Settings