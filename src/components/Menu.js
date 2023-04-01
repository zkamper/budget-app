import About from './About'
import Dashboard from './Dashboard'
import Settings from './Settings'
import Entry from './Entry'

import './Menu.css'

function Menu(props){

    const {id,setData,data,setBudget,budget} = props;
    const getMenu = (id) => {
        switch(id){
            case 'about':
                return <About/> //Done
            case 'dash':
                return <Dashboard setData={setData} data = {data} budget = {budget}/>
            case 'settings':
                return <Settings budget={budget} setBudget={setBudget} setData={setData}/>
            case 'entry':
                return <Entry setData={setData} data = {data}/> //Done
            default:
                break;
        }
    }

    return (
        <div className="Menu">
            {getMenu(id)}
        </div>
    )
}

export default Menu