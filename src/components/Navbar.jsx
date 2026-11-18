import { useState } from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
let [search,setSearch]=useState("");
let data=[
  {
    "id": 1,
    "name": "iPhone 13 Pro",
    "category": "mobiles",
    "price": 109900,
    "imgUrl": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S10",
    "category": "mobiles",
    "price": 69999,
    "imgUrl": "https://unsplash.com"
  },
  {
    "id": 3,
    "name": "iPhone X",
    "category": "mobiles",
    "price": 49900,
    "imgUrl": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500"
  },
  {
    "id": 4,
    "name": "Oppo F19 Pro Plus",
    "category": "mobiles",
    "price": 25990,
    "imgUrl": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500"
  },
  {
    "id": 5,
    "name": "Realme XT",
    "category": "mobiles",
    "price": 18999,
    "imgUrl": "https://unsplash.com"
  },
  {
    "id": 6,
    "name": "Apple MacBook Pro 14",
    "category": "laptop",
    "price": 169900,
    "imgUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
  },
  {
    "id": 7,
    "name": "Asus Zenbook Pro Dual Screen",
    "category": "laptop",
    "price": 149990,
    "imgUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
  },
  {
    "id": 8,
    "name": "Huawei Matebook X Pro",
    "category": "laptop",
    "price": 119999,
    "imgUrl": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
  },
  {
    "id": 9,
    "name": "Lenovo Yoga 920",
    "category": "laptop",
    "price": 95999,
    "imgUrl": "https://unsplash.com"
  },
  {
    "id": 10,
    "name": "New DELL XPS 13 9300",
    "category": "laptop",
    "price": 134990,
    "imgUrl": "https://unsplash.com"
  },
  {
    "id": 11,
    "name": "Men's Casual Slim Fit Shirt",
    "category": "fashion",
    "price": 1299,
    "imgUrl": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"
  },
  {
    "id": 12,
    "name": "Men's Cotton Jacket",
    "category": "fashion",
    "price": 3499,
    "imgUrl": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
  },
  {
    "id": 13,
    "name": "Nike Air Jordan 1 Red & Black",
    "category": "fashion",
    "price": 11995,
    "imgUrl": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500"
  },
  {
    "id": 14,
    "name": "Rolex Submariner Watch",
    "category": "fashion",
    "price": 24999,
    "imgUrl": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    "id": 15,
    "name": "Women's Moto Biker Jacket",
    "category": "fashion",
    "price": 2999,
    "imgUrl": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500"
  },
  {
    "id": 16,
    "name": "Nescafe Instant Coffee",
    "category": "daily products",
    "price": 450,
    "imgUrl": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500"
  },
  {
    "id": 17,
    "name": "Organic Honey Jar",
    "category": "daily products",
    "price": 399,
    "imgUrl": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=500"
  },
  {
    "id": 18,
    "name": "Fresh Cow Milk (1L)",
    "category": "daily products",
    "price": 75,
    "imgUrl": "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500"
  },
  {
    "id": 19,
    "name": "Fjallraven Everyday Backpack",
    "category": "daily products",
    "price": 3999,
    "imgUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
  },
  {
    "id": 20,
    "name": "Cooking Oil Bottle",
    "category": "daily products",
    "price": 220,
    "imgUrl": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500"
  }
]

  let filtermode= data.filter((x)=>{
    return x.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <>
    <div id="container">
        <div id="con1">
            logo
        </div>
        <div id="bar">
          <input type="text"
          placeholder="search items" 
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
        <div id="con2">
        <Link to={"/addData"}>Add</Link>
        <Link to={'/viewData'}>View</Link>
        </div>
    </div>
    {search===""?
    <p>start typing</p>
    :filtermode.length>0?
    (filtermode.map((x)=>{return <div key={x.id}>
            <img
              src={x.imgUrl}
              alt={x.name}
              width="100"
            />

            <h3>{x.name}</h3>
            <p>Category: {x.category}</p>
            <p>Price: ₹{x.price}</p>
          </div>})): (<p>no product found</p>)}
    </>
  )
}

export default Navbar