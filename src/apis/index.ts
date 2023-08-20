import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
})
