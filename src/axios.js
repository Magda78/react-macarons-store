import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://us-central1-macarons-store.cloudfunctions.net/api'
   // 'http://localhost:5001/macarons-store/us-central1/api'   //API(cloud function) url for local debugging
})

export default instance;