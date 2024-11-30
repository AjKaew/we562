import { useState, useReducer } from 'react'

const initialInventory = [
  { id: 1, name: "โทรศัพท์มือถือ", stock: 10, price: 25000 },
  { id: 2, name: "แล็ปท็อป", stock: 5, price: 50000 },
];

function inventoryReducer(inventory, action) {
  switch (action.type) {
    case "add":
      return [...inventory, action.data];
    case "remove":
      return inventory.filter((item) => item.id !== action.id);
    case "update":
      return inventory.map((item) =>
        item.id === action.data.id ? action.data : item
      );
  }
}

function App() {
  const [inventory, dispatch] = useReducer(inventoryReducer, initialInventory);
  const [searchTerm, setSearchTerm] = useState("");
  const [newItem, setNewItem] = useState(
    { id: "", name: "", stock: "", price: "" });
  const [editItem, setEditItem] = useState(null);

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdate = () => {
    dispatch({
      type: "update",
      data: {
        id: editItem.id,
        name: editItem.name,
        stock: parseInt(editItem.stock),
        price: parseFloat(editItem.price),
      },
    });
    setEditItem(null);
  };

  const handleAddItem = () => {
    dispatch({
      type: "add",
      data: {
        id: newItem.id,
        name: newItem.name,
        stock: parseInt(newItem.stock),
        price: parseFloat(newItem.price),
      },
    });
    setNewItem({ id: "", name: "", stock: "", price: "" });
  };

  return (
    <div>
      <h1>Inventory Management</h1>

      {/* ค้นหาสินค้า */}
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* แสดงสินค้าคงคลัง */}
      <ul>
        {filteredInventory.map((item) => (
          <li key={item.id}>
            {item.name} - {item.stock} in stock - ราคา {item.price}{" "}
            <button onClick={() => dispatch({ type: "remove", id: item.id })}>
              Remove
            </button>
            <button onClick={() => setEditItem(item)}>Edit</button>
          </li>
        ))}
      </ul>

      {editItem ? (
        /* แก้ไขสินค้า */
        <div>
          <h2>Edit Item</h2>
          <input
            type="text"
            value={editItem.name}
            onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
          />
          <input
            type="number"
            value={editItem.stock}
            onChange={(e) =>
              setEditItem({ ...editItem, stock: e.target.value })
            }
          />
          <input
            type="number"
            value={editItem.price}
            onChange={(e) =>
              setEditItem({ ...editItem, price: e.target.value })
            }
          />
          <button onClick={handleUpdate}>Update Item</button>
          <button onClick={() => setEditItem(null)}>Cancel</button>
        </div>
      ) : (
        /* เพิ่มสินค้า */
        <div>
          <h2>Add Item</h2>
          <input
            type="text"
            placeholder="ID"
            value={newItem.id}
            onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Stock"
            value={newItem.stock}
            onChange={(e) => setNewItem({ ...newItem, stock: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      )}
    </div>
  );
}

export default App
