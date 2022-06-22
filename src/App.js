import Header from "./Header"
import Content from "./Content";
import Footer from "./Footer";
import {useState} from "react";
import AddItem from "./AddItem";
import lineItem from "./LineItem";

function App() {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            name: 'Item 1'
        },
        {
            id: 2,
            checked: true,
            name: 'Item 2'
        },
        {
            id: 3,
            checked: false,
            name: 'Item 3'
        }
    ])
    
    const [newItem, setNewItem] = useState('')

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id == id ? {...item, checked: !item.checked} : item)
        setItems(listItems)
    }

    const removeItem = (id) => {
        const listItems = items.filter((item) => item.id != id)
        setItems(listItems)
    }
    
    const handleNewItem = (e) => {
        e.preventDefault();
        if (!newItem) {
            return
        }

        setNewItem('')

      const _newItem = {id: items.length ? items[items.length - 1].id + 1 : 1 , checked: false, name: newItem}
        setItems([...items, _newItem])
    }

    return (
        <div className="App">
            <Header title="Foods" />
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleNewItem={handleNewItem}
            />
            <Content
                items={items}
                handleCheck={handleCheck}
                removeItem={removeItem}
            />
            <Footer />
        </div>
    )
}

export default App;
