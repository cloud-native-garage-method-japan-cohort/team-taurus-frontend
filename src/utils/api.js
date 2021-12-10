import axios, { AxiosRequestConfig } from 'axios'

const baseUrl = process.env.REACT_APP_API_BASE_URL

const header = {
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
}

export async function get(path) {
  const res = await axios.get(baseUrl + path, header)
  return res.data
}
export async function post(
  path,
  body,
) {
  const res = await axios.post(baseUrl + path, body, header)
  return res.data
}

