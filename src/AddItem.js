import {FaPlus} from "react-icons/fa";

const AddItem = ({newItem, handleNewItem, setNewItem}) => {

    return (
        <form className="addForm" onSubmit={handleNewItem}>
            <input
                autoFocus
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add Item"
            />
            <button type="submit">
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem