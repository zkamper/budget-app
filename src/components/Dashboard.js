import DashboardContainer from "./dashboard/DashboardContainer"
import '../styles/Dashboard.css'

function Dashboard(props){

    const {budget,data,setData} = props

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <DashboardContainer data = {data} budget = {budget}/>
        </div>
    )
}

export default Dashboard