import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-f5c67.firebaseio.com/'
})

export default instance
