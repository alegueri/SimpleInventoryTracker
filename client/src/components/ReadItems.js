import {useState} from 'react'; 
import Axios from 'axios';
import InventoryItem from './inventoryItems';


// Actions happening when Show Inventory Items button gets clicked, occurs here. 
function ReadItems(props) {
    
    return (
        <div>
            {!props.showClicked ? <button onClick={()=>props.getItemList(true)}>Show Inventory Items</button> :
            <div>
            <button style ={{width:100,height:50}} onClick={()=>props.getItemList(false)}>Close</button>  
            <h1 style={{textAlign:'center', border:'1px solid'}}> Item | Price | Quantity</h1>

            {props.itemList.map((items,index) => <InventoryItem key={index}  
                                                                        items = {items}
                                                                         deleteItem = {props.deleteItem}
                                                                         handleChange = {props.handleChange}
                                                                         updateItem = {props.updateItem}
                                                                         id={items.id}
                                                        />
                                              ) } 
        </div>}
        </div>
    )
}
export default ReadItems
