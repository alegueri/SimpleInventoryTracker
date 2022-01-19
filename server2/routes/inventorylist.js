const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

// Allows to read database
Router.get("/",(req,res)=>{

    mysqlConnection.query("select * from  inventorylist", (err, rows, fields)=>{
        if (!err){ res.send(rows);}
        else { console.log(err); }
    })
});

//adds to database
Router.post("/create",(req,res)=>{
    const item = req.body.items.item
    const price = req.body.items.price
    const quantity = req.body.items.quantity
    mysqlConnection.query("INSERT INTO inventorylist (item, price, quantity) VALUES (?,?,?)",
                        [item,price,quantity],
                        (err,result) => {if (err) {console.log(err);} else {res.send("Values Inserted")}}
                        );
});

//updates database
Router.put("/update",(req,res)=>{
    const id = req.body.id
    const item = req.body.items.item
    const price = req.body.items.price
    const quantity = req.body.items.quantity
    mysqlConnection.query("UPDATE inventorylist SET item = ?, price= ?, quantity=? WHERE id =? ",[item,price,quantity,id],(err,result)=> {if (err) {console.log(err);} else {res.send(result)}} ); 

}); 

//deletes items in database
Router.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    mysqlConnection.query("DELETE FROM inventorylist WHERE id = ? ",id,(err,result)=> {if (err) {console.log(err);} else {res.send(result)}} ); 

}); 



module.exports=Router;