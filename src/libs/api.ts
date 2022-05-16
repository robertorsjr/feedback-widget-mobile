import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://feedback-widget-backend-production-e0ce.up.railway.app'
})