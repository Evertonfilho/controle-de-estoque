import CircularProgress from '@mui/material/CircularProgress'
import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'

import { findProducts } from '../../services/requester/products'

const PageFind: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>([])

  const fetchData = useCallback(async () => {
    setLoading(true)
    const response = await findProducts('')
    setLoading(false)
    if (response?.success) {
      setData(response?.products)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div>
      <h1>FIND</h1>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {data?.map(product => {
            return (
              <div key={`product-${product.id}`}>
                <div>{product?.name}</div>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

export default PageFind
