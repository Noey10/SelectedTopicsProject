import './AppSearch.css';

function AppSearch(props) {
  const { value, onValueChange } = props;
  return (
    <div className="wrapper" id="search">

    <div className="app-search">

      <input className="app-search-input"
        type="text"
        placeholder="search cactus name..."
        value={value}
        onChange={(event) => { onValueChange(event.target.value) }}
      />
      
    </div>

    </div>
  );
}

export default AppSearch;