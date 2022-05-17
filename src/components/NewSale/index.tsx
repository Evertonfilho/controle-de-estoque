import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import styles from './styles.module.css'
interface PropsNewSale{
    isOpen:boolean;
    onRequestClose:() => void;
}

export function NewSale({isOpen,onRequestClose}:PropsNewSale){

    function handleAddForm(event:FormEvent){
        event.preventDefault()
    }

    const [code,setCode] = useState('')
    const [category,setCategory] = useState('')
    const [name,setName] = useState('')
    const [total,setTotal] = useState(0)
    const [local,setLocal] = useState('')
    const [employee,setEmployee] = useState('')

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={styles.reactModalOverlay}
        className={styles.reactModalContent}
        >
            
            <button
            type="button"
            onClick={onRequestClose}
            >
                <img src='/images/close.svg' alt="delete" />
            </button>
            <h2>Adicionar Produto</h2>
            <div>
            <input 
            type="text"
            placeholder="Nome"
            onChange= {e => setName(e.target.value)}
            />
             <input 
            type="text"
            placeholder="Categoria"
            onChange= {e => setCategory(e.target.value)}
            />
             <input 
            type="text"
            placeholder="Código"
            onChange= {e => setCode(e.target.value)}
            />
             <input 
            type="number"
            placeholder="Total"
            onChange= {e => setTotal(Number(e.target.value))}
            />
             <input 
            type="text"
            placeholder="Local de entrada"
            onChange={e => setLocal(e.target.value)}
            />
             <input 
            type="text"
            placeholder="Funcionário"
            />
            </div>
            <button
            type="submit"
            onClick={handleAddForm}
            >
              Adicionar
            </button>

        </Modal>
    )
}