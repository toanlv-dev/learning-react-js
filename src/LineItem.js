import {FaTrashAlt} from "react-icons/fa";


const LineItem = ({item, handleCheck, removeItem}) => {

    return (
        <li className="item" key={item.id}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
            />
            <label>{item.name}</label>
            <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => removeItem(item.id)}
            />
        </li>
    )
}

export default LineItem