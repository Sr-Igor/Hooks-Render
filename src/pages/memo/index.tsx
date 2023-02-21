//Definição
// Cria uma comparação sem renderização do virtual Dom, caso não possuam direferneças
// o componente não é renderizado novamente, apesar disso ainda ocorre um metodo de
// comparação que pode ser menos vantajoso que deixar o react seguir o algoritimo de reconciliação 
// e executar varias renderizações, por isso existem condições para que o memo seja utilizado

// 1 - Pure Functional Components - Quando todo conteudo do componente é renderizado
// nas prorpiedades que são passadas para ele 

// 2 - Render too often - Quando o componente é renderizado muitas vezes,
// exemplo de uma alteração em dados de input 

// 3 - Re-render with same props - Renderiza varias vezes sempre com as mesmas propriedades,
// caso ele rederize com props diferentes, estará seguido apenas o fluxo normal de renderização 

// 4 - Components medium to big sizes - Componentes pequenos, é mais vantajoso deixar a renderização ocorrer
// do que bloquear as execuções e fazer verificações, por isso em componentes com grande quantidade
// de linhas de código, pode ser mais vantajoso utilizar o memo

import ListItem from "../../components/Memo/ListItem" //Utilizando o memo
import { useState } from "react"

export const MemoPage = () => {

    const [listItems, setListItems] = useState([1,2,3,4,5])

    const pushNewItem = () => {
        console.log('pushNewItem')
        setListItems([...listItems, listItems.length + 1])
    }

    return (
        <>
        <h1>Example Memo</h1>
        {listItems.map((item) => <ListItem item={`item ${item}`} key={item}/>)}
        <button onClick={pushNewItem} >Add new Item</button>
        </>
    )
}