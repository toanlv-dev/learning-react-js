import LineItem from "./LineItem";

const ItemList = ({items, handleCheck, removeItem}) => {

    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    item={item}
                    handleCheck={handleCheck}
                    removeItem={removeItem}
                    key={item.id}
                />
            ))}
        </ul>
    )

}

export default ItemList