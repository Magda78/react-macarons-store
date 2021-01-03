import React, { useState, useEffect } from 'react';
import './checkout.css';
import CheckoutItem from '../../CheckoutItem/checkoutItem';
import { selectUser } from '../../../features/userSlice';
import { selectBasket, selectTotal, setTotal, setCheckout, setBasket, setQuantity} from '../../../features/basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../../../axios';
import { useHistory } from 'react-router-dom';
import { db } from '../../../firebase';


  
function Checkout() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const basket = useSelector(selectBasket);
    const cartTotal = useSelector(selectTotal);
    const[succeeded, setSucceeded] = useState(false);
    const[processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
         const response = await axios({
             method: 'post',
             // Stripe expects the total in a currencies subunits
             url: `/checkout/create?total=${cartTotal * 100}`
         });
         setClientSecret(response.data.clientSecret)
     }
 
     getClientSecret();
 }, [basket])

    console.log('the secret', clientSecret);
    console.log(user);

    const totalHandler = () => {
        console.log(cartTotal)
        dispatch(setTotal());
    }

    const clearBasket = () => {
        dispatch(setCheckout());
    }

    const handleSubmit = async (event) => {
        //stripe config
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                //total: cartTotal,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.push('/orders')
            //alert('Thank you for your order');
            clearBasket();
        });
        
    }

    const handleChange = (event) => {
        //listen for changes in the card element, display errors made by costumer
        setDisabled(event.empty);
        setError(event.error ? event.error.message: '')
    }


    return (
        <div className='checkout'> 
            <div className='checkout__header'>
                <div className='checkout__headerItem'>
                    <span>Product</span>
                </div>
                <div className='checkout__headerItem'>
                    <span>Name</span>
                </div>
                <div className='checkout__headerItem'>
                    <span>Quantity</span>
                </div>
                <div className='checkout__headerItem'>
                    <span>Price</span>
                </div>
                <div className='checkout__headerItem'>
                    <span>Remove</span>
                </div>
            </div>
            {basket.map(item=> (
                <CheckoutItem 
                key={item.id} 
                id={item.id} 
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                total={item.total}
                url={item.url}
                />
            ))
            }
            <div className='checkout__total'>
                   {cartTotal ? 
                   <span>Total: ${cartTotal.toFixed(2)}</span>:
                   <span>Total: $0.00</span>
                   }
                
            </div>
            <div className='checkout_payment'>
                   <div className='checkout_paymentTitle'>
                        <h3>Payment method</h3>
                   </div>
                   <div className='checkout_paymentDetails'>
                   <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                                
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                   </div>
      
    </div>
            </div>
    )
}


export default Checkout;
