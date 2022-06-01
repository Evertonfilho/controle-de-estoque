import nc from 'next-connect'

import * as controller from '~/serverSide/products/product.controller'

const handler = nc().get(controller.findAll)

export default handler
