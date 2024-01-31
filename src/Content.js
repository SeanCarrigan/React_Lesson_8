import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Item 1",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);
  const handleCheck = (id) => {
    // const listItems = items.map((item) =>
    //   item.id === id ? { ...item, checked: !item.checked } : item
    // );

    // same logic as above - the forEach is just easier for me to read
    const listItems = [];
    items.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      listItems.push(item);
    });
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    // const listItems = items.filter((item) => item.id !== id);
    // same logic as above - the forEach is just easier for me to read
    const listItems = [];
    items.forEach((item) => {
      if (item.id !== id) {
        listItems.push(item);
      }
    });
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul style={{ listStyleType: "none" }}>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                onClick={() => handleDelete(item.id)}
                tabIndex="0"
              ></FaTrashAlt>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
