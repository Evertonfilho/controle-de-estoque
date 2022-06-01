import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { testeBack } from '~/serverSide/products/product.controller'
import type { ProductDto } from '~/serverSide/products/product.dto'

type PageProductProps = {
  product?: ProductDto
}

const PageProduct: NextPage<PageProductProps> = ({ product }) => {
  const { push } = useRouter()

  const onClickBack = () => {
    push('/products')
  }

  return (
    <>
      <h1>Produto ID:</h1>
      <p>nome: {product?.name}</p>
      <p>preço: {product?.price}</p>
      <button onClick={onClickBack}>VOLTAR</button>
    </>
  )
}

export default PageProduct

export const getServerSideProps: GetServerSideProps<PageProductProps> = async context => {
  const product = testeBack(+context.query?.productId)
  return {
    props: { product }
  }
}
