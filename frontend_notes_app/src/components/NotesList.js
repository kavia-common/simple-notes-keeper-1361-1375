import React from 'react';
function formatDate(d){if(!d)return '';var dt=new Date(d);var now=new Date();var ms=now-dt;var m=Math.floor(ms/60000);var h=Math.floor(ms/3600000);var dy=Math.floor(ms/86400000);if(m<1)return 'Just now';if(m<60)return m+'m ago';if(h<24)return h+'h ago';if(dy<7)return dy+'d ago';return dt.toLocaleDateString('en-US',{month:'short',day:'numeric'});}
function trunc(t,ml){var x=ml||80;if(!t)return '';if(t.length<=x)return t;return t.substring(0,x)+'...';}
// PUBLIC_INTERFACE
function NotesList(props){
  if(props.notes.length===0){return (<div className="notes-list__empty"><p className="notes-list__empty-icon">📋</p><p className="notes-list__empty-text">No notes found</p><p className="notes-list__empty-hint">Click the + button to create a new note</p></div>);}
  return (<ul className="notes-list" role="list" aria-label="Notes list">{props.notes.map(function(note){return (<li key={note.id} className={'notes-list__item'+(props.selectedNoteId===note.id?' notes-list__item--selected':'')} onClick={function(){props.onSelectNote(note.id);}} role="button" tabIndex={0} onKeyDown={function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();props.onSelectNote(note.id);}}} aria-selected={props.selectedNoteId===note.id} aria-label={'Note: '+(note.title||'Untitled Note')}><div className="notes-list__item-header"><h3 className="notes-list__item-title">{note.title||'Untitled Note'}</h3><span className="notes-list__item-date">{formatDate(note.updatedAt)}</span></div><p className="notes-list__item-preview">{trunc(note.content)||'No content'}</p></li>);})}</ul>);
}
export default NotesList;
