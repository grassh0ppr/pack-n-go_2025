import { useState, createContext } from "react";
import Logo from "./Logo";
import MyForm from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import ThemeToggle from "./ThemeToggle";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Create theme context
export const ThemeContext = createContext();

export default function App() {
  const [items, setItems] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleEditItem(id, newDescription) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, description: newDescription } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div className={`app ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
        <ThemeToggle />
        <Logo />
        <MyForm onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onEditItem={handleEditItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </ThemeContext.Provider>
  );
}
