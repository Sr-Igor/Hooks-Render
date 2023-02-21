import { memo } from 'react'

type Props = {
    item: string
}

const ListItem = ({item}: Props) => {
    return(
        <div className="item" key={item}>{item}</div>
    )
}

export default memo(ListItem) 