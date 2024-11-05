
import React, { useState } from "react";
import { Input, Button, Listbox, ListboxItem } from "@nextui-org/react";

export default function List() {
  const [item, setItem] = useState<string>(""); // State for the input item
  const [items, setItems] = useState<string[]>([]); // State for the list of items

  const addItem = () => {
    if (item.trim() !== "") {
      setItems((prevItems) => [...prevItems, item]); // Add the item to the list
      setItem(""); // Clear the input field
    }
  };

  const deleteItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index); // Remove the item at the specified index
    setItems(newItems); // Update the list
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg border-primary bg-gray-100">
      <Input
        type="text"
        label="Add item"
        value={item}
        onChange={(e) => setItem(e.target.value)} // Update input state
      />
      <Button onClick={addItem} className="mt-2">Add</Button>

      <Listbox
        aria-label="Item list"
        className="mt-4 w-full border rounded-md border-gray-300"
      >
        {items.length === 0 ? (
          <ListboxItem isDisabled className="p-2 text-gray-500" key={""}>
            No items available
          </ListboxItem>
        ) : (
          items.map((listItem, index) => (
            <ListboxItem key={index} className="flex justify-between items-center p-2 border-b last:border-b-0">
              {listItem}
              <Button onClick={() => deleteItem(index)} size="sm" color="danger">
                Delete
              </Button>
            </ListboxItem>
          ))
        )}
      </Listbox>
    </div>
  );
}
