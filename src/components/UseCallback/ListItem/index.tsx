import { memo } from 'react'

type Props = {
    item: string,
    onAddWishList: (id: string) => void
}

const ListItem = ({item, onAddWishList}: Props) => {
    return(
        <li>
            <div className="item" key={item}>{item}</div>
            <button onClick={() => onAddWishList(item)}>Add to wishlist</button>
        </li>
    )
}

export default memo(ListItem) 