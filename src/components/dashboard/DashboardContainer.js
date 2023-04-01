import './DashboardContainer.css'
import React from 'react'

const DashboardContainer = (props) => {

    const { data, budget } = props

    const getSpentBudget = () => {
        let sum = 0
        let today = new Date()
        let month = today.getMonth() + 1
        let year = today.getFullYear();
        today = Date.parse(today)
        let begginingOfMonth = Date(`${year}-${month}-1`)
        begginingOfMonth = Date.parse(begginingOfMonth)
        for (const e of data) {
            let eventDate = Date.parse(e.date)
            console.log(begginingOfMonth,eventDate,today)
            //console.log(e)
            if (begginingOfMonth-24*3600*1000 <= eventDate && eventDate <= today) {
                sum += parseFloat(e.value)
                //console.log(e);
            }
        }
        return sum

    }

    const getWeekBudget = () => {
        let sum = 0;
        let today = new Date()
        let day = today.getDay()
        day--;
        if (day === -1)
            day = 6;
        day++;
        let start = new Date() - day * 24 * 3600 * 1000
        let end = start + 7 * 24 * 3600 * 1000
        for (const e of data) {
            let eventDate = Date.parse(e.date)
            if (start-24*3600*1000 <= eventDate && eventDate <= end+24*3600*1000) {
                sum += parseFloat(e.value)
            }
            
        }
        return sum;
    }

    const remainingBudget = () => {
        let sum = getSpentBudget()
        return (budget - sum) > 0 ?
            `${budget - sum} RON`
            : 'You\'ve used up your budget for this month'

    }

    return (
        <div className='dashboardContainer'>
            <div className='dashBox'>
                <h3>Spendings:</h3>
                <p>This week: {getWeekBudget()} RON</p>
                <p>This month: {getSpentBudget()} RON</p>
            </div>
            <div className='dashBox'>
                <h3>Remaining Budget:</h3>
                <p id="overview">{remainingBudget()}</p>
            </div>
        </div>
    )
}

export default DashboardContainer