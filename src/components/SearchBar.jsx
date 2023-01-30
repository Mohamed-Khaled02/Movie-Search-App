import { BsSearch } from "react-icons/bs";

const Search = ({ searchField, setSearchField, fetchUrl }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={searchField}
        placeholder="search for movie"
        onChange={(e) => setSearchField(e.target.value)}
      />
      <BsSearch className="img" onClick={() => fetchUrl()} />
    </div>
  );
};

export default Search;
