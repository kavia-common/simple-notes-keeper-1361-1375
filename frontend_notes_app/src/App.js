import React, { useState } from 'react';
import { useNotes } from './hooks/useNotes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NoteView from './components/NoteView';
import NoteEditor from './components/NoteEditor';
import FloatingAddButton from './components/FloatingAddButton';
import './App.css';
// PUBLIC_INTERFACE
function App() {
  var h = useNotes();
  var sb = useState(false);
  var sidebarOpen = sb[0];
  var setSidebarOpen = sb[1];
  return (
    <div className="App">
      <Header />
      <div className="app-layout">
        <button className="mobile-menu-toggle" onClick={function(){setSidebarOpen(function(p){return !p;});}} aria-label="Toggle notes sidebar" title="Toggle sidebar">☰</button>
        <Sidebar notes={h.notes} selectedNoteId={h.selectedNoteId} searchQuery={h.searchQuery} onSearch={h.handleSearch} onSelectNote={h.handleSelectNote} isOpen={sidebarOpen} onClose={function(){setSidebarOpen(false);}} />
        <main className="main-pane" role="main">
          {h.isEditing && h.selectedNote ? (
            <NoteEditor note={h.selectedNote} onSave={function(id,u){h.handleUpdateNote(id,u);h.handleStopEditing();}} onCancel={h.handleStopEditing} onDelete={h.handleDeleteNote} />
          ) : (
            <NoteView note={h.selectedNote} onEdit={h.handleStartEditing} onDelete={h.handleDeleteNote} />
          )}
        </main>
        <FloatingAddButton onClick={function(){h.handleCreateNote();setSidebarOpen(false);}} />
      </div>
    </div>
  );
}
export default App;
