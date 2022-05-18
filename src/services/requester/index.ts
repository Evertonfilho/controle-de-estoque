import axios, { AxiosError } from 'axios'

const Api = axios.create({ baseURL: '/api' })

Api.interceptors.response.use(
  res => res,
  (error?: AxiosError) => {
    const response = error && error?.response
    const errorMessage = error ? `${error.code || error.message}` : 'timeout'
    const data: any = { success: false, message: errorMessage }
    return response ? Promise.resolve(response) : Promise.resolve({ data })
  }
)

export { Api }
