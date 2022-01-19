import React from 'react'
import {useState, useEffect} from 'react' 


//One function for the updating inputs. ReadItems module maps each element of the array to it's own 'inventoryItem' allowing for efficiency and modularity. 
export const InventoryItem = (props) => {
    
    return (
        <div> 
        <div className = "inventItem " style = {{display:'flex', padding:20, flexDirection:'column', border:'1px solid', alignItems:'center'}}>

                <div className="item" style = {{display:'flex', paddingRight:20 }}>
                <div> <label>Item: </label> {props.items.item} </div> <div> <input style ={{marginLeft:30}} type ="text" name ="item" placeholder = "Item" onChange = {event=>props.handleChange(event)} /></div> 
                </div>
                <div className="price" style = {{display:'flex',paddingRight:20}}>
                     <div> <label>Price: </label> { props.items.price} </div>  <div> <input style ={{marginLeft:30}} type ="text" name ="price" placeholder = "Price" onChange = {event=>props.handleChange(event)}  /> </div> 
                </div>
                <div className="quantity" style = {{display:'flex',paddingRight:20}}>
                <div> <label>Quantity: </label> { props.items.quantity } </div>   <div> <input style ={{marginLeft:30}} type ="text" name ="quantity" placeholder = "Quantity" onChange = {event=>props.handleChange(event)} /> </div> 
                </div>

        </div>   
                <div>
                 
                <button style={{margin:20}}onClick={()=>props.deleteItem(props.id)}>  Delete </button> 
                <button style={{marginLeft:100}}  onClick={()=>props.updateItem(props.id)}>  Update </button> 
                </div>
        
        </div>
        )
}


export default InventoryItem