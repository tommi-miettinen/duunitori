const Search = () => {
  return (
    <div className="rounded-xl m-2 grid grid-cols-2">
      <div className="w-full flex items-center shadow rounded-xl p-4 border">
        <input
          placeholder="Hae"
          type="text"
          className="w-full h-full outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="10" cy="10" r="7"></circle>
          <line x1="21" y1="21" x2="15" y2="15"></line>
        </svg>
      </div>
    </div>
  );
};

export default Search;
