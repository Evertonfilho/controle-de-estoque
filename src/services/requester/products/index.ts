import { Api } from '..'

export async function findProducts(search: string): Promise<any> {
  const response = await Api.get('/products', { params: { search } })
  return response?.data
}

export async function getProduct(productId: number): Promise<any> {
  const response = await Api.get(`/products/${productId}`)
  return response?.data
}

export async function paginateProducts(pagination: any = {}): Promise<any> {
  const response = await Api.get('/products/paginate', { params: pagination })
  return response?.data
}
