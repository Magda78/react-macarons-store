import React from 'react';
import './cartItem.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { selectBasket, setRemove, setAddQuantity, setRemoveQuantity, selectTotal, setTotal} from '../../features/basketSlice';
import { useSelector, useDispatch} from 'react-redux';

function CartItem({id, url, price,title, quantity, total}) {
    const dispatch = useDispatch()
    const basket = useSelector(selectBasket);

    const addItemHandler = (id) => (
        dispatch(setAddQuantity ({
                id: id,
                url: url,
                title: title,
                price: price,
                total: total,
                quantity: quantity
        }
        ))
    )

    const minusItemHandler = () => (
        dispatch(setRemoveQuantity (
            {
                id: id,
                url: url,
                title: title,
                price: price,
                total: total,
                quantity: quantity
        }
    ))
    )


    return (
        <div className='cartItem'>
            <div className='cartItem__img'>
                <img src={url} alt=''/>
            </div>
            <div className='cartItem__details'>
                <h4>{title}</h4>
                <div className='cartItem__info'>
                <span className='cartItem__quantityNumber'>Price: ${price}</span>
                <div className='cartItem__quantity'>
                    <span className='cartItem__icons' onClick={() => minusItemHandler(id)}><ArrowLeftIcon/></span>
                    <span className='cartItem__quantityNumber'>{quantity}</span>
                    <span className='cartItem__icons' onClick={() => addItemHandler(id)}><ArrowRightIcon/></span>
                </div>
                </div>  
            </div>
        </div>
    )
}


export default CartItem
