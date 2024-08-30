import React, { useState } from "react";
import Cart from "./Cart";

const Cards = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cart, setCart] = useState([]);

  const carddata = [
    {
      id: 1,
      img: "../images/01.jpg",
      title: "Samsung Galaxy S Ultra",
      price: "50",
    },
    {
      id: 2,
      img: "../images/02.jpg",
      title: "Samsung Galaxy S Series",
      price: "75",
    },
    {
      id: 3,
      img: "../images/03.jpg",
      title: "Samsung Galaxy Flip",
      price: "95",
    },
    {
      id: 4,
      img: "../images/04.jpg",
      title: "Samsung Galaxy Fold",
      price: "120",
    },
    {
      id: 5,
      img: "../images/05.jpg",
      title: "Samsung Galaxy Tab",
      price: "350",
    },
    {
      id: 6,
      img: "../images/06.jpg",
      title: "Samsung Galaxy Watch",
      price: "120",
    },
    {
      id: 7,
      img: "../images/07.jpg",
      title: "Samsung Book Series",
      price: "110",
    },
    {
      id: 8,
      img: "../images/08.jpg",
      title: "Samsung Accessories",
      price: "250",
    },
  ];
  const onAdd = (data) => {
    const exist = cart.find((x) => x.id === data.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === data.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...data, qty: 1 }]);
    }
  };
  const onRemove = (data) => {
    const exist = cart.find((x) => x.id === data.id);
    if (exist.qty == 1) {
      setCart(cart.filter((x) => x.id !== data.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === data.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const viewCart = () => {
    setIsCartVisible(true);
  };
  return (
    <>
      <div className="container">
        <h2 className="pb-2 border-bottom text-center" id="products">
          Products
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {carddata.map((data) => {
            return (
              <div className="col-lg-3 " key={data.id}>
                <div className="card card-img">
                  <img
                    src={data.img}
                    className="card-img-top "
                    alt="Product Pics"
                  />
                  <div className="card-body cart-text">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text text-center lead">${data.price}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-center">
                    <button
                      className="btn btn-success "
                      onClick={() => onAdd(data)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        {isCartVisible ? (
          <div className="container">
            {cart.length > 0 ? (
              <Cart cart={cart} onAdd={onAdd} onRemove={onRemove} />
            ) : (
              <h2 className="text-center">Your Cart Is Empty</h2>
            )}
          </div>
        ) : (
          <button className="btn btn-dark text-center" onClick={viewCart}>
            View Cart
          </button>
        )}
      </div>
    </>
  );
};

export default Cards;
