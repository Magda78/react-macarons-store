import { createSlice } from '@reduxjs/toolkit';
import items from '../data/products.json';


///const distraction = () => {
  let newItems = items.map(item => {
    const { id }  = item.sys;
    const { title, price, quantity } = item.fields;
    const  { url }   = item.fields.image.fields.file;
    return {id, title, price, url, quantity}
})
//}

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: newItems,
    messageOpen: false
  },
  reducers: {
    setSearch: (state, action) => {
      const searchItem = state.products.filter(item => item.title.includes(action.payload));
      action.payload  ? state.products = searchItem : state.products = newItems
      //const searchItem = state.products.filter(item => item.title.includes(action.payload));
      //searchItem ? state.products = searchItem : state.products = newItems
      //state.products = searchItem;
      console.log('FROM SLICE STATE:', state.products)
      console.log('FROM SLICE PAYLOAD:', action.payload)
      //console.log('FROM SLICE SEARCH:', searchItem);
      console.log('FROM SLICE PRODUCTS', state.products)
      
  },
  setOpenMessage: (state) => {
    state.messageOpen = !state.messageOpen
  },
  setProducts: (state) => {
    state.products = newItems
  }
}
});



export const { setSearch, setOpenMessage, setProducts} = productsSlice.actions;

export const selectProducts = state => state.products.products;
export const selectOpenMessage = (state) => state.products.messageOpen;

export default productsSlice.reducer;