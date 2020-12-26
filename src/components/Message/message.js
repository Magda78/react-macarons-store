import React, { useState }from 'react';
import './message.css';
import { setOpenMessage, selectOpenMessage } from '../../features/productsSlice'
import { useSelector, useDispatch } from 'react-redux';

function Message() {
    const dispatch = useDispatch();
    let toggleMessage = useSelector(selectOpenMessage);
    //const[toggleMessage, setToggleMessage] = useState(true);
    const hideMessage = document.getElementById('message');

    const toogleMessageHandler = () => {
        dispatch(setOpenMessage())
        //setToggleMessage(false);
    }

    return (
        <div className='message' id='message'>
            <div className='message_info'>
            <p> Flavor field is empty </p>
            <button onClick={toogleMessageHandler}>Ok</button>
               
            </div>
        </div>
    )
}

export default Message;
