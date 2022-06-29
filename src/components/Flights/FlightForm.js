import React from 'react';
import InputBox from '../UI/InputBox';
import FlightDetails from './FlightDetails';
import style from './FlightForm.module.css';


const FlightForm = () => {
    return <React.Fragment>
        <form className={style.flightForm}>
            <h1 className={style.heading}>Flight Search App Deployed</h1>
            <div className={`${style.fields} ${style.flex}`}>
                <div className={style.formInput} ><InputBox id="departure_city" type="text" /></div>
                <div className={style.formInput}><InputBox id="arrival_city" type="text" /></div>
                <div className={style.formInput}><InputBox id="departure_time" type="date" /></div>
            </div>
            <div className={style.flex}>
                <button className={style.submitButton}>Search</button>
            </div>
        </form>
        <div className={style.details_div}>
            <h3>Best Flight Plan</h3>
            <FlightDetails />
            <FlightDetails />
        </div>
    </React.Fragment>
}

export default FlightForm;
