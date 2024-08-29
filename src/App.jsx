import { useState } from "react";
import "./App.scss";
import Header from "./assets/components/header/Header.jsx";
import Main from "./assets/components/main/Main.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Main searchValue={searchValue} />
    </>
  );
}

export default App;
