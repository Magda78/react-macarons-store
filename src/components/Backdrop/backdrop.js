import React from 'react';
import './backdrop.css';
import { selectOpen, setOpen } from '../../features/basketSlice';
import { useSelector, useDispatch } from 'react-redux';

function Backdrop() {
    const dispatch = useDispatch()
	let toggleCart = useSelector(selectOpen)
	
	 const handleShoppingCart = () => {
		console.log(toggleCart)
		dispatch(setOpen())
		
	 }
    return (
        <div className='backdrop' onClick={handleShoppingCart}>
            
        </div>
    )
}

export default Backdrop
