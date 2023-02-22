//Definição
//é Utilizado para memorizar funçoes e evitar que elas sejam passadas
//para os componentes filhos a cada rederização, assim como o useMemo,
//é usado apra solucionar problemas de shallow comparation

//Evita que a funçãom seja recriada
//segue o conceito de {}==={} = false,
//useCallback torna a comparação de funções verdadeira

import { useCallback, useState } from "react"
import ListItem from "../../components/UseCallback/ListItem"

export const CallbackPage = () => {
    const [wishList, setWishList] = useState<string[]>([])
    const [listItems, setListItems] = useState([1,2,3,4,5])


    //Evita que a funçãom seja recriada
    const pushNewItem = useCallback((id: string) => {
        console.log('pushNewItem')
        setWishList(state => [...state, id])
    }, [])

    //Renderiza a cada aitem (descomentar para testar)
    // const pushNewItem = (id: string) => {
    //     console.log('pushNewItem')
    //     setWishList(state => [...state, id])
    // }

    return (
        <>
        <h1>Example useCallback</h1>
        <p>Items</p>
        {listItems.map((item) => <ListItem item={`item ${item}`} onAddWishList={pushNewItem} key={item}/>)}
        
        <p>WishList</p>
        {wishList.map((item) => <div key={item}>{item}</div>)}
        </>
    )
}