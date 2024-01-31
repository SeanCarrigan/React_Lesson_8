import { useState } from "react";
import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  // get default state from local storage
  // allows for restoring correct list on page reload
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    // set id = last list item.id + 1, or 1 if list is empty
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    // console.log(listItems);
    setAndSaveItems(listItems);
  };

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
    setAndSaveItems(listItems);
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
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // addItem
    addItem(newItem);
    setNewItem(""); // reset input field to placeholder
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch}></SearchItem>
      <Content
        // .filter filters the list being sent to the content component based on the search field entry
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></Content>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
