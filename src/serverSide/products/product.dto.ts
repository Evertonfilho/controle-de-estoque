import { ResponseApi } from '../response.dto'

export interface ProductDto {
  id: number
  code: string
  name: string
  price: number
  categoryId: number
}

export interface ResponseFindProductDto extends ResponseApi {
  products: ProductDto[]
}
