import React ,{useState, useEffect} from 'react';
import './products.css';
import Item from '../Item/item';
import items from '../../data/products.json'

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(items);
      },[]);

      console.log(products)
    return (
        <div className='products'>
            <h3>Our Products</h3>
            <div className='product__list'>
                {products.map(product => (
                    <Item />
                ))}
            </div>
        </div>
    )
}

export default Products
