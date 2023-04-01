import React from 'react'
import '../../styles/DashboardContainer.css'

const ONE_DAY = 24 * 3600 * 1000

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
            //console.log(begginingOfMonth,eventDate,today)
            //console.log(e)
            if (begginingOfMonth - ONE_DAY <= eventDate && eventDate <= today) {
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
        //This portion gets the day as a number from 1 to 7
        day--;
        if (day === -1)
            day = 6;
        day++;
        //
        let start = new Date() - day * ONE_DAY
        let end = start + 7 * 24 * 3600 * 1000
        for (const e of data) {
            let eventDate = Date.parse(e.date)
            if (start - ONE_DAY <= eventDate && eventDate <= end + ONE_DAY) {
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