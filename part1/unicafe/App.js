import React, {useState} from 'react';


const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const all = props.good + props.bad + props.neutral
    const average = (props.good + (props.bad*-1))/all
    const positive = (props.good)/all *100
    if(all===0){
        return (
            <p>No feedbacks were given by the customers</p>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><Statistic text="Good"  /></td>
                        <td><Statistic text=":"value={props.good} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Neutral"  /></td>
                        <td><Statistic text=":"value={props.neutral} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Bad"  /></td>
                        <td><Statistic text=":"value={props.bad}/></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Total" /></td>
                        <td><Statistic text=":"value={all} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Average " /></td>
                        <td><Statistic text=":"value={average}  /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Positivity" /></td>
                        <td><Statistic text=":"value={positive} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    
    return (
        <div>
            <h1> WELCOME TO UNICAFE</h1>
            <h3> Dear customer, Please give your valuable feedback :</h3>
            <div>
                <Button event={()=> setGood(good+1)} text="Good" />
                <Button event={()=> setNeutral(neutral+1)} text="Neutral" />
                <Button event={()=> setBad(bad+1)} text="Bad" />
                                
            </div>
            <br></br>
            <br></br>
            <h3>Statistics are shown below</h3>
            <Statistics good={good} bad ={bad} neutral={neutral} />
        </div>
    )
}



export default App