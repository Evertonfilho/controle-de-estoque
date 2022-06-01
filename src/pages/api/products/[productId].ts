import nc from 'next-connect'

import * as controller from '~/serverSide/products/product.controller'

const handler = nc().get(controller.findOne)

export default handler
