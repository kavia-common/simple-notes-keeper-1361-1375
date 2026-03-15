const STORAGE_KEY = 'simple_notes_keeper_notes';
function generateId() { return Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 9); }
// PUBLIC_INTERFACE
export function getAllNotes() { try { var d = localStorage.getItem(STORAGE_KEY); if (!d) return []; var n = JSON.parse(d); return n.sort(function(a,b){return new Date(b.updatedAt)-new Date(a.updatedAt);}); } catch(e) { return []; } }
// PUBLIC_INTERFACE
export function getNoteById(id) { return getAllNotes().find(function(n){return n.id===id;}) || null; }
// PUBLIC_INTERFACE
export function createNote(data) { var d=data||{}; var now=new Date().toISOString(); var n={id:generateId(),title:d.title||'Untitled Note',content:d.content||'',createdAt:now,updatedAt:now}; var all=getAllNotes(); all.push(n); saveNotes(all); return n; }
// PUBLIC_INTERFACE
export function updateNote(id, updates) { var all=getAllNotes(); var i=all.findIndex(function(n){return n.id===id;}); if(i===-1) return null; all[i]=Object.assign({},all[i],updates,{updatedAt:new Date().toISOString()}); saveNotes(all); return all[i]; }
// PUBLIC_INTERFACE
export function deleteNote(id) { var all=getAllNotes(); var f=all.filter(function(n){return n.id!==id;}); if(f.length===all.length) return false; saveNotes(f); return true; }
// PUBLIC_INTERFACE
export function searchNotes(query) { if(!query||!query.trim()) return getAllNotes(); var q=query.toLowerCase().trim(); return getAllNotes().filter(function(n){ return n.title.toLowerCase().indexOf(q)!==-1||n.content.toLowerCase().indexOf(q)!==-1; }); }
function saveNotes(notes) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(notes)); } catch(e) { /* noop */ } }
