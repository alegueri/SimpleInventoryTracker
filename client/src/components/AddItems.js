import React from 'react'
import {useState} from 'react'; 
import Axios from 'axios';

// Here are the inputs for adding items into the inventorylist database. 

function AddItems(props) {

    return (
        <div style={{display:'flex', alignItems: 'center', flexDirection:'column'}}> 
        <div className="App" style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <div className= "listItems" style ={{display:'flex', padding: 20}}> 
                  <label style={{padding:20}}> Item: </label>
                  <input 
                    type = "text" 
                    name = "item"
                    onChange = {event=>props.handleChange(event)}
                    />       
            </div>
            <div className= "listItems" style ={{display:'flex',padding: 20}}> 
                <label style={{padding:20}} > Price: </label>
                <input 
                    type = "number"
                    name= "price"
                    onChange = {event=>props.handleChange(event)}
                    />
            </div>

            <div className= "listItems" style ={{display:'flex',padding: 20}}> 
                <label style={{padding:20}} > Quantity: </label>
                <input 
                type = "number"
                name = "quantity"
                onChange = {event=>props.handleChange(event)}
                /> 
            </div>
       
        </div>
        <button onClick={props.addItem} style={{padding:10, width:200, height: 50}}> Add Item</button> 
        </div>
      );
}

export default AddItems
