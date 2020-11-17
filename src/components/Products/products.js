import React ,{useState, useEffect} from 'react';
import './products.css';
import Item from '../Item/item';
import items from '../../data/products.json';


function Products() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        let newItems = items.map(item => {
            const { id }  = item.sys;
            const { title, price, quantity } = item.fields;
            const  { url }   = item.fields.image.fields.file;
            return {id, title, price, url, quantity}
        })
        setProducts(newItems);
      },[]);

      console.log(products)
    return (
        <div className='products'>
            <h3>Our Products</h3>
            <div className='product__list'>
                {
                    products.map(item => (
                        <Item 
                        key={item.id}              
                        item={item}
                        />
    ))
                }
            </div>
        </div>
    )
}

export default Products
