import React, { useState } from 'react';
import InputBox from '../UI/InputBox';
import FlightDetails from './FlightDetails';
import style from './FlightForm.module.css';


const FlightForm = () => {
    const [departureCityInput, setDepartureCityInput] = useState('');
    const [arrivalCityInput, setArrivalCityInput] = useState('');
    const [feildInputError, setFieldInputError] = useState(false);
    const [dateInput, setDateInput] = useState();
    const [flightDetails, setFlightDetails] = useState([]);
    const [flightsErrorMessage, setFlightErrorMessage] = useState("");
    
     const formSubmithandler = e =>  {
        e.preventDefault();
        setFlightErrorMessage("Loading...");
        let departureCity = departureCityInput;
        let arrivalCity = arrivalCityInput;
        if(departureCity == "" ||  arrivalCity == ""){
            setFieldInputError(true)
            setFlightErrorMessage();
            return ;
        }
        let date = dateInput;
        let url = "https://flightbackend.herokuapp.com/api/flights/";
        let body = {
            "departure_city":departureCity,
            "arrival_city":arrivalCity,
            "date":date
        }
        fetch(url, {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(body) 
            }).then(data=>data.json())
               .then(res=>{

                if(!Array.isArray(res)) return setFlightErrorMessage(res.detail);
                if(res.length === 0){
                    setFlightErrorMessage("No Flights found");
                    setFlightDetails([]);
                    return 
                } 

                let flights = res.map(el=>{
                    return {
                        id : el.id,
                        ticket : el.ticket_number,
                        departureDetails : el.departure_city + ' ' + new Date (el.departure_time).toLocaleTimeString('en-US'),
                        arrivalDetails : el.arrival_city + ' ' + new Date (el.arrival_time).toLocaleTimeString('en-US')
                    }
                })
                console.log(flights.length)
                

                setFlightDetails(flights);
               })
               .catch(err=>{
                console.log(err)
                //setFlightErrorMessage(err);
               }
                
            )
        
        
    }
    const departureInputHandler = (e) =>{
        setDepartureCityInput(e.target.value);
    }
    const arrivalInputHandler = (e) =>{
        setArrivalCityInput(e.target.value);
    }
    const dateInputHandler = (e) =>{
        setDateInput(e.target.value);
    }
    return <React.Fragment>
        <form className={style.flightForm} onSubmit={formSubmithandler}>
            <h1 className={style.heading}>Flight Search</h1>
            <div className={`${style.fields} ${style.flex}`}>
                <div className={style.formInput} ><InputBox id="departure_city" type="text" onValueChange={departureInputHandler} placeholder="Departure City*" /></div>
                <div className={style.formInput}><InputBox id="arrival_city" type="text" onValueChange={arrivalInputHandler} placeholder="Arrival City*"/></div>
                <div className={style.formInput}><InputBox id="departure_time" type="date" onValueChange={dateInputHandler} placeholder="Date"/></div>
            </div>
            <div className={style.flex}>
                <button className={style.submitButton}>Search</button>
            </div>
            {feildInputError && <p className={style.errorMessage}><b>Please fill all the required fields</b></p>}
        </form>
        { flightDetails.length > 0 &&  <div className={style.details_div}>
            <h3>Best Flight Plan</h3>
             {flightDetails.map(flight=> <FlightDetails data={flight} key={flight.id}/> )}
        </div>}
        { flightDetails.length == 0 &&  <p className={style.errorMessage}>{flightsErrorMessage}</p>}
        
    </React.Fragment>
}

export default FlightForm;
