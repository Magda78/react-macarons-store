import React from 'react';
//import { connect } from 'react-redux';
//import { clearItem, addItem, removeItem } from '../redux/cart/cart.action';
import './checkoutItem.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { selectBasket, setRemove, setAddQuantity, setRemoveQuantity, setQuantity, selectTotal, setTotal} from '../../features/basketSlice';
import { useSelector, useDispatch} from 'react-redux';
import CartItem from '../CartItem/cartItem';

function CheckoutItem({id,url,price,quantity,title, total, clearItem, addItem, removeItem}) {
    //const { url, title, price, quantity } = item
    const dispatch = useDispatch()
    const basket = useSelector(selectBasket);
    //const cartTotal = useSelector(selectTotal)

    const totalHandler = () => {
      //  console.log(cartTotal)
        dispatch(setTotal());
    }


    const addItemHandler = (id) => (
        dispatch(setAddQuantity ({
                id: id,
                url: url,
                title: title,
                price: price,
                total: total,
                quantity: quantity
        }
        )),
        totalHandler(),
        dispatch(setQuantity())
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
    )),
    totalHandler(),
    dispatch(setQuantity())
    )

    const removeItemHandler = (id) => (
        dispatch(setRemove(
            {
                id: id,
                url: url,
                title: title,
                price: price,
                total: total,
                quantity: quantity
            },
            console.log(id)
        )) ,
        totalHandler(),
        dispatch(setQuantity())
    )
    return (
        <div className='checkoutItem'>
            <div className='checkoutItem__img'>
                <img src={url} alt='' />
            </div>
            <span className='checkoutItem__name'>{title}</span>
            <div className='checkoutItem__quantity'>
                <span className='checkoutItem__icons' onClick={() => minusItemHandler(id)}><ArrowLeftIcon/></span>
                <span>{quantity}</span>
                <span className='checkoutItem__icons' onClick={() => addItemHandler(id)}><ArrowRightIcon/></span>
            </div>
            <span className='checkoutItem__price'>${price}</span>
            <span className='checkout__remove checkoutItem__icons' onClick={() => removeItemHandler(id)}><DeleteOutlineIcon/></span>
        </div>
    )
}



export default CheckoutItem;
