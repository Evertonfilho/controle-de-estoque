import { NewSale } from "../NewSale";
import {HomePage} from "../HomePage";
import { useState } from "react";

export function Dashboard(){

    const [newProductModalOpen, setNewProductModalOpen] = useState(false)

    function handleOpenNewProductModal() {
      setNewProductModalOpen(true)
    }
    function handleCloseNewProductModal() {
      setNewProductModalOpen(false)
    }
  

    return(
        <>
        <HomePage OpenNewProduct={handleOpenNewProductModal}/>
        <NewSale
            isOpen={newProductModalOpen}  
            onRequestClose={handleCloseNewProductModal}
        />
        </>
    )
}