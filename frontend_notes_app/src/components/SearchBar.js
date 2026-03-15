import React from 'react';
// PUBLIC_INTERFACE
function SearchBar(props) {
  return (<div className="search-bar"><span className="search-bar__icon" aria-hidden="true">🔍</span><input className="search-bar__input" type="text" placeholder="Search notes..." value={props.query} onChange={function(e){props.onSearch(e.target.value);}} aria-label="Search notes" />{props.query && (<button className="search-bar__clear" onClick={function(){props.onSearch('');}} aria-label="Clear search" title="Clear search">✕</button>)}</div>);
}
export default SearchBar;
