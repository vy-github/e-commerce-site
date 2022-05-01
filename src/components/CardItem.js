// //"https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter="
 import React,{ useEffect, useState } from 'react';
 import {Button,Card} from 'react-bootstrap';
import './CardItem.css';
 const CardItem =()=>{
   const url="https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=";
   const [items, setItems] = useState({});

   //  const getUserData = async () => {
   //    const response = await fetch(url);
   //    const jsonData = await response.json();
   //    setUserData(jsonData);
   //  };
  
   useEffect(() => {
   fetch(url)
   .then((item)=>item.json())
   .then((resp)=>setItems(resp.result.products)) 
   }, []);
  console.log("items",items);
    const obj={
        "id_product": "79565",
        "source_product_id": "79565",
        "parent_id": "0",
        "sku": "21AUW14029-311668",
        "name": "Sage Green Jacquard Kurta with Embroidery",
        "price": "2999",
        "selling_price": "1499",
        "discount": "50",
        "stock_status": "in-stock",
        "quantity": "0",
        "status": "active",
        "visibility": "show",
        "description": "Sage green straight jacquard kurta in round neck and three-quarter sleeves. It also feautures metallic embroidery.",
        "image": "https:\/\/wforwoman.gumlet.io\/product\/21AUW14029-311668\/300\/21AUW14029-311668_1.JPG"
 };

    return(
<div>
 { items.length >0 &&
    items.map((item)=>{
       return(
  <div className='main-block'>
   <img class="img-responsive" src={item.image}></img>
    <p><strong>Name:</strong>{item.name}</p>
    <p><strong>Price:</strong>{item.price}</p>
    <p><strong>Quantity                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                :</strong>{item.quantity}</p>
    <p><strong>Stock_Status:</strong>{item.stock_status}</p>
    <button class="btn-danger btn-block">Add to Cart</button>
    <hr/
    >
  </div>
       )                                                                      
    })                                                                                          
 };
 </div>
);
 }
 {/* {products.map((items)=>{
     return(       
    <>
    <img src={items.image}></img>
    <p><strong>Name:</strong>{items.name}</p>
    <p><strong>Price:</strong>{items.price}</p>
    <p><strong>Quantity:</strong>{items.quantity}</p>
    <p><strong>Stock_Status:</strong>{items.stock_status}</p>
    <hr/>
    </>
     )
})}; */}
export default CardItem;
// import React,{ useEffect, useState } from "react";
// const CardItem=()=>{
//     const [list,setList]=useState([]);
//    useEffect(()=>{
// fetch("https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=")
// .then((data)=>data.json())
// .then((data)=>setList(data))
//    },[])
// }
//export default CardItem;
