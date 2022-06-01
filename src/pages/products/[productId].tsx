import { NextPage } from 'next'
import { useRouter } from 'next/router'

const PageProduct: NextPage = () => {
  const { query, push } = useRouter()

  const onClickBack = () => {
    push('/products')
  }

  return (
    <>
      <h1>Produto ID: {query.productId}</h1>
      <button onClick={onClickBack}>VOLTAR</button>
    </>
  )
}

export default PageProduct
