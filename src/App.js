
import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import Header from './Header';


const products = [
  {
    id: 1,
    url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71sQIj8cI8L._SX679_.jpg",
    title: "ASUS Vivobook Pro 15 OLED Laptop",
    description: "AMD Ryzen 7 5800HS Mobile Processor 3.2 GHz (8-core/16-thread, 16MB cache, up to 4.4 GHz max boost)",
    price: 79990,
    isInCart: false
  },
  {
    id: 2,
    url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51jj9y44yDL._SY300_SX300_QL70_FMwebp_.jpg",
    title: "UHUD CRAFTS 3-Tier Plant Stand | Flower Pot Display Shelf",
    description: "3 Tiers Ladder Plant Stand - This plant rack features 3 tiers to showcase your beautiful flowers, succulent collection,",
    price: 1699,
    isInCart: false
  },
  {
    id: 3,
    url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Vc14MtETL._SX679_.jpg",
    title: "JBL Tour One M2 Headphones",
    description: "The JBL Tour One M2 has a 4-mic crystal call algorithm and VoiceAware, allowing you to control how much of your own voice is heard",
    price: 19999,
    isInCart: false
  },
  {
    id: 4,
    url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71xb2xkN5qL._SX679_.jpg",
    title: "Apple iPhone 15 (128 GB)",
    description: "iPhone 15 features a durable color-infused glass and aluminum design and Dynamic Island bubbles up Live Notifications",
    price: 78990,
    isInCart: false
  },
  {
    id: 5,
    url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/516low1zhGL._SX679_.jpg",
    title: "ADRO Men's Fleece Hooded Hoodie",
    description: "Durable fabric, stitching and Quality finish makes this Product a must have this Winter",
    price: 1099,
    isInCart: false
  },
  {
    id: 6,
    url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51rs780QqGL._SX679_.jpg",
    title: "KAFF Built-in Hobs 3 Burners Stove",
    description: "Stainless Steel Drip Tray, Metal Knobs, Matt Enameled Pan Support, Black Tempered Glass",
    price: 14599,
    isInCart: false
  },
  {
    id: 7,
    url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61t5vb1LAUL._SX679_.jpg",
    title: "Tommy Hilfiger Analog Blue Dial Men's Watch",
    description: "Dial Color: Blue, Case Shape: Round, Dial Glass Material: Mineral",
    price: 13490,
    isInCart: false
  },
  {
    id: 8,
    url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91DLEpPrCNL._SY695_.jpg",
    title: "Lavie Women's Ushawu Small Satchel Bag",
    description: "Ushawu small satchel has a top zip closure to keep your essentials in place",
    price: 1099,
    isInCart: false
  },
  {
    id: 9,
    url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71VQxLV+h4L._SX695_.jpg",
    title: "Adidas Men's Clinch-X M Running Shoe",
    description: "Rubber outsole with high grip durability and dust any dry dirt from the surface ",
    price: 1378,
    isInCart: false
  },
]

function App() {

  const [cart, setCart] = useState([])
  // mapping the data...
  return (
    <div class="container-fluid">
      <div><Header count={cart.length} /></div>
      <div className='d-flex flex-wrap'>
        {
          products.map((product) => (
            <ProductList
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))
        }
      </div>
    </div >

  );
}

export default App;
