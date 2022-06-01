import { NextApiRequest, NextApiResponse } from 'next'

import { ResponseApi } from '../response.dto'
import type { ProductDto, ResponseFindProductDto } from './product.dto'

const data: ProductDto[] = [
  { id: 1, name: 'Produto 1', categoryId: 1, code: '212134', price: 12 },
  { id: 2, name: 'Produto 2', categoryId: 1, code: '212134', price: 12 },
  { id: 3, name: 'Produto 3', categoryId: 1, code: '212134', price: 12 },
  { id: 4, name: 'Produto 4', categoryId: 1, code: '212134', price: 12 },
  { id: 5, name: 'Produto 5', categoryId: 1, code: '212134', price: 12 },
  { id: 6, name: 'Produto 6', categoryId: 1, code: '212134', price: 12 },
  { id: 7, name: 'Produto 7', categoryId: 1, code: '212134', price: 12 }
]

export async function findAll(req: NextApiRequest, res: NextApiResponse<ResponseFindProductDto>): Promise<void> {
  const products = data
  // await wait(5000)
  return res.status(200).json({ success: true, products })
}

export async function findOne(req: NextApiRequest, res: NextApiResponse<any>): Promise<void> {
  const { query } = req
  const productId = +query?.productId || 0
  if (!productId) res.status(400).json({ success: false, message: 'id do produto invalido' })

  const product = data.find(f => f.id === productId)
  if (!product) res.status(404).json({ success: false, message: 'produto não encontrado' })

  return res.status(200).json({ success: true, product })
}

export async function create(req: NextApiRequest, res: NextApiResponse<ResponseApi>): Promise<void> {
  // await wait(5000)
  return res.status(200).json({ success: true })
}
