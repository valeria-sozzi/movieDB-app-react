import "./header.scss";

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <header>
      <div className="header-img">
        <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg" />
      </div>
      <div className="search">
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        <input
          value={searchValue}
          placeholder="Cerca Film o Serie TV"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
