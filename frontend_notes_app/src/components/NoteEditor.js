import React, { useState, useEffect, useRef } from 'react';
// PUBLIC_INTERFACE
function NoteEditor(props){
  var s1=useState('');var title=s1[0];var setTitle=s1[1];
  var s2=useState('');var content=s2[0];var setContent=s2[1];
  var titleRef=useRef(null);
  useEffect(function(){if(props.note){setTitle(props.note.title||'');setContent(props.note.content||'');}else{setTitle('');setContent('');}},[props.note]);
  useEffect(function(){if(titleRef.current){titleRef.current.focus();}},[props.note]);
  return (<div className="note-editor"><form className="note-editor__form" onSubmit={function(e){e.preventDefault();if(props.note){props.onSave(props.note.id,{title:title.trim()||'Untitled Note',content:content});}}}><div className="note-editor__header"><h2 className="note-editor__heading">{props.note&&props.note.title?'Edit Note':'New Note'}</h2><div className="note-editor__actions"><button type="submit" className="btn btn--save" aria-label="Save note" title="Save note">💾 Save</button><button type="button" className="btn btn--cancel" onClick={props.onCancel} aria-label="Cancel editing" title="Cancel">✕ Cancel</button>{props.note&&(<button type="button" className="btn btn--delete" onClick={function(){if(window.confirm('Are you sure you want to delete this note?')){props.onDelete(props.note.id);}}} aria-label="Delete note" title="Delete note">🗑️ Delete</button>)}</div></div><div className="note-editor__fields"><input ref={titleRef} className="note-editor__title-input" type="text" placeholder="Note title..." value={title} onChange={function(e){setTitle(e.target.value);}} aria-label="Note title" /><textarea className="note-editor__content-input" placeholder="Start writing your note..." value={content} onChange={function(e){setContent(e.target.value);}} aria-label="Note content" rows={20} /></div></form></div>);
}
export default NoteEditor;
