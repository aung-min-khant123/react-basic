import React from "react";
import { useState } from "react";

function CRUD() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [edtiText, setEditText] = useState("");

  const handleAdd = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem("");
    } else {
      console.log("empty");
    }
  };
  const updateItem = (index) => { 
    
    const updateItems = items.map((item, i) => i === index ? edtiText : item);
    console.log("updateItems", updateItems);
    setItems(updateItems);
    setEditIndex(null);
  };
  const deleteItem = (index) => {
    setItems(items.filter((_,i)))
  }
  return (
    <>
      <h1>Create, Read, Update,Delete</h1>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button onClick={handleAdd}>Add</button><br /><br />
      {console.log(items)}
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {console.log("edit", editIndex)}
            {editIndex === index ? (
              <>
                <input type="text" onChange={(e) => setEditText(e.target.value)} />
                <button onClick={() => updateItem(index)}>Update</button>
              </>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <p>{item}</p>
                <button onClick={() => setEditIndex (index)}>Edit </button>
                <button onClick={() => deleteItem (index)}>Delete</button>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default CRUD;
