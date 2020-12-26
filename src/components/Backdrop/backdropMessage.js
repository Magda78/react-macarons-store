import React from 'react';
import './backdrop.css';
import { setOpenMessage, selectOpenMessage } from '../../features/productsSlice'
import { useSelector, useDispatch } from 'react-redux';

function Backdrop() {
    const dispatch = useDispatch();
    let toggleMessage = useSelector(selectOpenMessage);
	
	 const handleMessage = () => {
		//console.log(toggleCart)
		dispatch(setOpenMessage())
		
	 }
    return (
        <div className='backdrop' onClick={handleMessage}>
            
        </div>
    )
}

export default Backdrop