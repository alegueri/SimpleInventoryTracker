import React from 'react'
import {CSVLink} from "react-csv";


const CSVReport = ({itemList}) => {
    const headers = [
        {label: 'Item', key: 'item'},
        {label: 'Price', key: 'price'},
        {label:  'Quantity', key: 'quantity'}
     
    ];
    const csvReport = {
        filename: 'InventoryList.csv',
        headers: headers,
        data: itemList
    };
    return (

        <button><CSVLink {...csvReport}> Export to CSV </CSVLink> </button>


    )
}

export default CSVReport;
