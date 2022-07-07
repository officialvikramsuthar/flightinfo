import React, {Fragment} from 'react';
import style from './FlightDetails.module.css';

const FlightDetails = ({data}) => {
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
                <td>{data.ticket}</td>
                <td>{data.departureDetails}</td>
                <td>{data.arrivalDetails}</td>
            </tr>
            </tbody>
        </table>
        </Fragment>
}

export default FlightDetails;