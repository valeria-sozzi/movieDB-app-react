import { useState } from "react";
import "./App.scss";
import Header from "./assets/components/header/Header.jsx";
import Main from "./assets/components/main/Main.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutti");

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Main searchValue={searchValue} selectedCategory={selectedCategory} />
    </>
  );
}

export default App;
