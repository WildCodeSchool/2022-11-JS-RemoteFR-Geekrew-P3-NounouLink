import PropTypes from "prop-types";

function SearchBar({ search, setSearch }) {
  console.info(search);
  return (
    <div>
      <input
        className="h-[63px] w-[350px] border-solid font-medium border-2 text-lg border-grey3 focus:outline-grey2 px-4 rounded-full"
        type="text"
        placeholder="Entrer votre recherche"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
