import {useState} from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [name, setName] = useState('Toanlv');
    const [count, setCount] = useState(0);
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

    function checkboxOnchange(id) {
        const listItems = items.map((item) => item.id == id ? {...item, checked: !item.checked} : item)
        setItems(listItems)
    }

    function removeItem(id) {
        const listItems = items.filter((item) => item.id != id)
        setItems(listItems)
    }

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input
                            type={"checkbox"}
                            checked={item.checked}
                            onChange={() => checkboxOnchange(item.id)}
                        />
                        <label>{item.name}</label>
                        <FaTrashAlt
                            role="button"
                            tabIndex="0"
                            onClick={() => removeItem(item.id)}
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content