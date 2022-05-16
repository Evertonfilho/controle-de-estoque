
import styles from './styles.module.css'
export function Header(){
  return(
    <>
    <header className= {styles.Navbar}>
      <h1>Logo</h1>
      <p>cliente@gmail.com</p>
    </header>
    <main className={styles.Container}>
    <div className={styles.Sidebar}>
    <nav className={styles.Box1}>
        <ul>
          <li>
            <a href="#">
              <img src='/images/PaginaInicial.svg' />
              <span>Página Inicial</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src='/images/PaginaInicial.svg' />
              <span>Financeiro</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src='/images/PaginaInicial.svg' />
              <span>Estoque</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src='/images/PaginaInicial.svg' />
              <span>Fiscal</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src='/assets/PaginaInicial.svg' />
              <span>Vendas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src='/assets/PaginaInicial.svg' />
              <span>Contatos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src='/assets/PaginaInicial.svg' />
              <span>Relatório</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src='/assets/PaginaInicial.svg' />
              <span>Locais</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src='/assets/PaginaInicial.svg' />
              <span>Assinatura</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src='/assets/PaginaInicial.svg' />
              <span>Suporte</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className={styles.Box2}>
    <div className={styles.BoxLayout}>
        <div className={styles.Box3}>
            <header>
              <p>Faturamento nos ultimos 30 dias</p>
            </header>
            <strong>
            R$ ......
            </strong>
        </div>
        <div className={styles.Box3}>
            <header>
              <p>Movimentação diária</p>
            </header>
            <strong>
            R$ 567
            </strong>
        </div>
        <div className={styles.Box3}>
            <header>
              <p>Quantidade diária de vendas</p>
            </header>
            <strong>
              21 vendas
            </strong>
        </div>
    </div>
        <input 
        type="text" 
        placeholder="Pesquisar"
        />
        <button>Pesquisar Produto</button>
        <button>Adicionar Venda</button>
        <div className={styles.Table}>
          <table>
            <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Custo/Venda</th>
              <th>Estoque</th>
              <th>Data e hora</th>
              <th>Total</th>
              <th>Opções</th>
            </tr>
            </thead>
            <tbody >
              <tr>
                <td>654891</td>
                <td>Carregador</td>
                <td>Venda</td>
                <td>R$ 18 / R$ 29</td>
                <td>14.0 un</td>
                <td>05/12/21 as 16:44</td>
                <td>39 un</td>
                <td>
                  <button>editar</button>
                  <button className={styles.BtnDelete}>excluir</button>
                </td>
              </tr>
            </tbody>
            <tbody >
              <tr>
                <td>654891</td>
                <td>Carregador</td>
                <td>Venda</td>
                <td>R$ 18 / R$ 29</td>
                <td>14.0 un</td>
                <td>05/12/21 as 16:44</td>
                <td>39 un</td>
                <td>
                  <button>editar</button>
                  <button className={styles.BtnDelete}>excluir</button>
                </td>
              </tr>
            </tbody>
            <tbody >
              <tr>
                <td>654891</td>
                <td>Carregador</td>
                <td>Venda</td>
                <td>R$ 18 / R$ 29</td>
                <td>14.0 un</td>
                <td>05/12/21 as 16:44</td>
                <td>39 un</td>
                <td>
                  <button>editar</button>
                  <button className={styles.BtnDelete}>excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
  </div>
  </div>

    </main>
      </>
    
  )
}


