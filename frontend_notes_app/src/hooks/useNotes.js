import { useState, useEffect, useCallback } from 'react';
import { getAllNotes, createNote, updateNote, deleteNote, searchNotes } from '../services/notesStorage';
// PUBLIC_INTERFACE
export function useNotes() {
  var s1=useState([]); var notes=s1[0]; var setNotes=s1[1];
  var s2=useState(null); var selectedNoteId=s2[0]; var setSelectedNoteId=s2[1];
  var s3=useState(''); var searchQuery=s3[0]; var setSearchQuery=s3[1];
  var s4=useState(false); var isEditing=s4[0]; var setIsEditing=s4[1];
  useEffect(function(){if(searchQuery.trim()){setNotes(searchNotes(searchQuery));}else{setNotes(getAllNotes());}},[searchQuery]);
  var refreshNotes=useCallback(function(){if(searchQuery.trim()){setNotes(searchNotes(searchQuery));}else{setNotes(getAllNotes());}},[searchQuery]);
  var handleCreateNote=useCallback(function(){var n=createNote({title:'',content:''});refreshNotes();setSelectedNoteId(n.id);setIsEditing(true);return n;},[refreshNotes]);
  var handleUpdateNote=useCallback(function(id,u){var r=updateNote(id,u);refreshNotes();return r;},[refreshNotes]);
  var handleDeleteNote=useCallback(function(id){deleteNote(id);if(selectedNoteId===id){setSelectedNoteId(null);setIsEditing(false);}refreshNotes();},[selectedNoteId,refreshNotes]);
  var handleSelectNote=useCallback(function(id){setSelectedNoteId(id);setIsEditing(false);},[]);
  var handleStartEditing=useCallback(function(){setIsEditing(true);},[]);
  var handleStopEditing=useCallback(function(){setIsEditing(false);},[]);
  var handleSearch=useCallback(function(q){setSearchQuery(q);},[]);
  var selectedNote=notes.find(function(n){return n.id===selectedNoteId;})||null;
  return {notes:notes,selectedNote:selectedNote,selectedNoteId:selectedNoteId,searchQuery:searchQuery,isEditing:isEditing,handleCreateNote:handleCreateNote,handleUpdateNote:handleUpdateNote,handleDeleteNote:handleDeleteNote,handleSelectNote:handleSelectNote,handleStartEditing:handleStartEditing,handleStopEditing:handleStopEditing,handleSearch:handleSearch,refreshNotes:refreshNotes};
}
