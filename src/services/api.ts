import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.PROD
    ? 'https://api.github.com'
    : 'http://localhost:3333',
})
