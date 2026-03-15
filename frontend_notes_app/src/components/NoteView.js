import React from 'react';
// PUBLIC_INTERFACE
function NoteView(props){
  if(!props.note){return (<div className="note-view__placeholder"><div className="note-view__placeholder-content"><span className="note-view__placeholder-icon">📝</span><h2 className="note-view__placeholder-title">Select a note</h2><p className="note-view__placeholder-text">Choose a note from the sidebar or create a new one</p></div></div>);}
  var note=props.note;
  return (<div className="note-view"><div className="note-view__header"><h2 className="note-view__title">{note.title||'Untitled Note'}</h2><div className="note-view__actions"><button className="btn btn--edit" onClick={props.onEdit} aria-label="Edit note" title="Edit note">✏️ Edit</button><button className="btn btn--delete" onClick={function(){if(window.confirm('Are you sure you want to delete this note?')){props.onDelete(note.id);}}} aria-label="Delete note" title="Delete note">🗑️ Delete</button></div></div><div className="note-view__meta"><span>Created: {new Date(note.createdAt).toLocaleString()}</span><span>Updated: {new Date(note.updatedAt).toLocaleString()}</span></div><div className="note-view__content">{note.content?note.content.split('\n').map(function(line,i){return <p key={i} className="note-view__paragraph">{line||'\u00A0'}</p>;}):(<p className="note-view__empty-content">This note is empty</p>)}</div></div>);
}
export default NoteView;
