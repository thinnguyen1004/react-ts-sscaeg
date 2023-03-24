import * as React from 'react';
import './style.scss';

// API
const API = 'https://mocki.io/v1/f8d44009-0a6d-45ca-8f0a-7a81f2cc0731';

/*
  API returns an array of "products"
  Each individual product has the followings:
    id: string
    stock: number
    thumbnail: string
    title: string
    brand: string
    description: string
    category: string
    price: number
*/

export default function App() {
  const response = fetch(API).then((res) =>
    res
      .json()
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.log(error))
  );

  return;

  <div className="container">
    {response?.map((item, index) => {
      return (
        <div className="card" key={index}>
          <img className="thumnail" src={item.thumnail} />
          <div className="category">{item.category}</div>
          <a className="product-name">{item.title}</a>
          <div className="description">{item.description}</div>
          <div className="price">{item.price}</div>
        </div>
      );
    })}
  </div>;
}
