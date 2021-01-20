import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-cf0b1/us-central1/api'

})

export default instance;