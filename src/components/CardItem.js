import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./CardItem.css";
const CardItem = () => {
  const url =
    "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=";
  const [items, setItems] = useState({});

  //  const getUserData = async () => {
  //    const response = await fetch(url);
  //    const jsonData = await response.json();
  //    setUserData(jsonData);
  //  };

  useEffect(() => {
    fetch(url)
      .then((item) => item.json())
      .then((resp) => setItems(resp.result.products));
  }, []);

  return (
    <div>
      {items.length > 0 &&
        items.map((item) => {
          return (
            <div className="main-block">
              <img class="img-responsive" src={item.image}></img>
              <p>
                <strong>Name:</strong>
                {item.name}
              </p>
              <p>
                <strong>Price:</strong>
                {item.price}
              </p>
              <p>
                <strong>Quantity :</strong>
                {item.quantity}
              </p>
              <p>
                <strong>Stock_Status:</strong>
                {item.stock_status}
              </p>
              <button class="btn-danger btn-block">Add to Cart</button>
              <hr />
            </div>
          );
        })}
      ;
    </div>
  );
};

export default CardItem;
