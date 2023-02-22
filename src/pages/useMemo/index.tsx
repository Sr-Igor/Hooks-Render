//Definição 
// Memoriza o valor de um retorno, e monitora as dependencias incluidas em
// um array, tal como o useEffect. Caso as dependencias não sejam alteradas
// o valor memorizado se manter, caso contrario o valor é recalculado


// Deve ser utilizado em estrtutras onde calculos complexos são realizados 
// pois assim como o memo, esse item cria uma comparação, e caso o item naão 
// seja verdadeiramente pesado, pode ser mais vantajoso deixar o react realizar

import { useMemo, useState } from "react"

export const UseMemoPage = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')

    const typeNumber = useMemo(()=> {
        console.log('Será executado apenas quando o count for alterado');
        return count % 2 === 0 ? 'Par' : 'Impar'
    }, [count])

    return (
        <>
            <h1>Example useMemo</h1>
            <div>
                <input value={value} onChange={e => setValue(e.target.value)}/>
                <div>count: {count}</div>
                <div>Esse numero é {typeNumber}</div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </>
    )
}