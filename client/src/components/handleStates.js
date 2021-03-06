import {useState} from 'react'; 
import Axios from 'axios';


// all functions defined for handling state variables are organized/defined here. 

function HandleStates() {
    const [itemList, setItemList] = useState([]); 
    const [showClicked, setShowClicked] = useState(false);

    //object array for added inputs and updated inputs respectively. 
    const [iItems,setiItems] = useState(
      {
          id:0,
          item: '',
          price: 0,
          quantity: 0 
      }
    );
    const [newiItems,setnewiItems] = useState(
      {
          id:0,
          item: '',
          price: 0,
          quantity: 0 
      }
    );


    //Handlechange events for added and updated inputs respectively. 
    const handleChange = (event) => {
         
          setiItems({
              ...iItems,
              [event.target.name]:event.target.value
          })
          console.log(iItems);
    }
  
    const handleChange2 = (event) => {
      
      setnewiItems({
          ...newiItems,
          [event.target.name]:event.target.value
      })
      console.log(newiItems)
      
    }

    // Functions below connect frontend with backend.
    const addItem = () => {
      Axios.post('http://localhost:3001/inventorylist/create',{
        items: iItems
        }).then(()=>
        {
          setItemList([...itemList,
                        iItems
          ]); 
        } 
        );
    };

    const getItemList = (bool) => {
        Axios.get('http://localhost:3001/inventorylist/').then((response)=> {
            setItemList(response.data); });
        
        setShowClicked(bool)
    }

    
    const deleteItem = (id)=> {
      Axios.delete(`http://localhost:3001/inventorylist/delete/${id}`).then((response)=> {
        setItemList(itemList.filter(val=>val.id!=id).map(newVal => ({id:newVal.id, item: newVal.item, price: newVal.price, quantity:newVal.quantity})))
              });
    }

    const updateItem =(id)=> {
      Axios.put('http://localhost:3001/inventorylist/update',{
          items: newiItems,
          id: id
            }).then((response)=> {
                setItemList(itemList.map((val)=>{
                      return val.id === id ? {id: val.id, item: newiItems.item, price: newiItems.price, quantity: newiItems.quantity} : val      
                      }))
                  }
               );
      }

      
    return {iItems, newiItems, setiItems, setnewiItems, itemList, showClicked, handleChange,handleChange2, addItem, getItemList,deleteItem, updateItem}
}

export default HandleStates
