import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";

function App() {
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
    <div className="App">
      <Header title="Grocery List" />
      <AddItem />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></Content>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
