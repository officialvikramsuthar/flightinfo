import React, {Fragment} from 'react';
import style from './FlightDetails.module.css';

const FlightDetails = () => {
    return <Fragment>
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Flight Number</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>AK-168</td>
                <td>Delhi - 7:00 PM</td>
                <td>Indore - 8:00 PM</td>
            </tr>
            </tbody>
        </table>
        </Fragment>
}

export default FlightDetails;