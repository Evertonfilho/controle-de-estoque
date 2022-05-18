import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { wait } from '../../../helpers'

// import * as productsController from '~/serverSide/controllers/products.controller'

const data = [
  { id: 1, name: 'Produto 1', categoryId: 1, code: 212134, price: 12 },
  { id: 2, name: 'Produto 2', categoryId: 1, code: 212134, price: 12 },
  { id: 3, name: 'Produto 3', categoryId: 1, code: 212134, price: 12 },
  { id: 4, name: 'Produto 4', categoryId: 1, code: 212134, price: 12 },
  { id: 5, name: 'Produto 5', categoryId: 1, code: 212134, price: 12 },
  { id: 6, name: 'Produto 6', categoryId: 1, code: 212134, price: 12 },
  { id: 7, name: 'Produto 7', categoryId: 1, code: 212134, price: 12 }
]

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const products = data
  await wait(5000)
  return res.status(200).json({ success: true, products })
})

export default handler
