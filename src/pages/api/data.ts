import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request
  const data = [
    { id: 1, nome: 'Teclado dazz', categoria: 'venda', codigo: 212134, funcionario: 'Marcos Paulo', total: 12, method },
    { id: 2, nome: 'Teclado dazz', categoria: 'venda', codigo: 212134, funcionario: 'Marcos Paulo', total: 12, method },
    { id: 3, nome: 'Teclado dazz', categoria: 'venda', codigo: 212134, funcionario: 'Marcos Paulo', total: 12, method },
    { id: 4, nome: 'Teclado dazz', categoria: 'venda', codigo: 212134, funcionario: 'Marcos Paulo', total: 12, method },
    { id: 5, nome: 'Teclado dazz', categoria: 'venda', codigo: 212134, funcionario: 'Marcos Paulo', total: 12, method },
    { id: 6, nome: 'Teclado dazz', categoria: 'venda', codigo: 212134, funcionario: 'Marcos Paulo', total: 12, method },
    { id: 7, nome: 'Teclado dazz', categoria: 'venda', codigo: 212134, funcionario: 'Marcos Paulo', total: 12, method }
  ]
  try {
    response.status(200).json(data)
  } catch (err) {
    response.status(500).json({ statusCode: 500, message: err.message })
  }

  return response.json(data[1])
}
