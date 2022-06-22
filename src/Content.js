import ItemList from "./ItemList";

const Content = ({ items, handleCheck, removeItem }) => {

    return (
        <main>
            <ItemList
                items={items}
                handleCheck={handleCheck}
                removeItem={removeItem}
            />
        </main>
    )
}

export default Content