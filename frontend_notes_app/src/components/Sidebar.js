import React from 'react';
import SearchBar from './SearchBar';
import NotesList from './NotesList';
// PUBLIC_INTERFACE
function Sidebar(props){
  return (<React.Fragment>{props.isOpen&&(<div className="sidebar-overlay" onClick={props.onClose} aria-hidden="true" />)}<aside className={'sidebar'+(props.isOpen?' sidebar--open':'')} role="complementary" aria-label="Notes sidebar"><div className="sidebar__header"><SearchBar query={props.searchQuery} onSearch={props.onSearch} /><span className="sidebar__count">{props.notes.length} {props.notes.length===1?'note':'notes'}</span></div><div className="sidebar__list"><NotesList notes={props.notes} selectedNoteId={props.selectedNoteId} onSelectNote={function(id){props.onSelectNote(id);if(window.innerWidth<=768){props.onClose();}}} /></div></aside></React.Fragment>);
}
export default Sidebar;
