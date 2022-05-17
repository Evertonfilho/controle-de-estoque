import { useState } from 'react'

import { HomePage } from '../HomePage'
import { NewSale } from '../NewSale'

export function Dashboard() {
  const [newProductModalOpen, setNewProductModalOpen] = useState(false)

  function handleOpenNewProductModal() {
    setNewProductModalOpen(true)
  }
  function handleCloseNewProductModal() {
    setNewProductModalOpen(false)
  }

  return (
    <>
      <HomePage OpenNewProduct={handleOpenNewProductModal} />
      <NewSale isOpen={newProductModalOpen} onRequestClose={handleCloseNewProductModal} />
    </>
  )
}
