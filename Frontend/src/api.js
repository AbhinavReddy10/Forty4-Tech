import axios from 'axios'

export const fetchUsers = () =>
  axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
