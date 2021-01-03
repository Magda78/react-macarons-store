import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice ({
  name: 'basket',
  initialState: {
    basket: [],
    open: false,
    disabled: false,
    total: 0,
    quantity:0
  },
  reducers: {
    setBasket: (state, action) => {
      const {id, price, url, title, quantity, total} = action.payload
      const isThere = state.basket.find(item => item.id === action.payload.id);
      

        if(!isThere) {
        state.basket.push({id, price, url, title, quantity: 1})
        } else {
          isThere.quantity++
        }
        
      },

      setRemove: (state, action) => {
        let {id, price, url, title, quantity} = action.payload
        const isThere = state.basket.findIndex(item => item.id === action.payload.id);
        
          if(isThere != -1) {
          state.basket.splice(isThere,1) ;
          
          }
        },

        setAddQuantity: (state, action) => {
          let {id, price, url, title, quantity, total} = action.payload
          const isThere = state.basket.find(item => item.id === action.payload.id);
          
    
            if(isThere) {
              isThere.quantity++;
              //state.quantity++;
            //total = price * quantity ;
            }
          },

          setRemoveQuantity: (state, action) => {
            let {id, price, url, title, quantity, total} = action.payload
            const isThere = state.basket.find(item => item.id === action.payload.id);
            
  
              if(isThere) {
                isThere.quantity > 1 ? isThere.quantity-- : state.disabled = true;
               // total = price * quantity ;
              }
            },

          setTotal : (state) => {
            let itemTotal = 0;
            state.total = 0;
            state.basket.map(item => {
              itemTotal = item.price * item.quantity;
              state.total += itemTotal;
            })
          },

     setQuantity: (state) => {
       const cartQuantity = state.basket.map(item => {
         return item.quantity;
       })
       const sum = cartQuantity.reduce((acc, current) => acc + current, 0)
       console.log(sum)
       state.quantity = sum
     },    

    setOpen: (state) => {
      state.open = !state.open
    },

    setCheckout: (state) => {
      state.basket = [];
      state.quantity = 0;
    }
  }
})
export const { setBasket, setOpen, setRemove, setAddQuantity, setQuantity, setRemoveQuantity, setTotal, setCheckout } = basketSlice.actions;
export const selectBasket = (state) => state.basket.basket;
export const selectTotal = (state) => state.basket.total;
export const selectOpen = (state) => state.basket.open;
export const selectQuantity = (state) => state.basket.quantity;
export default basketSlice.reducer;