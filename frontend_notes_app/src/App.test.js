import { render, screen } from '@testing-library/react';
import App from './App';

var mockStore = {};
var lsMock = {
  getItem: function(key) { return mockStore[key] || null; },
  setItem: function(key, value) { mockStore[key] = String(value); },
  removeItem: function(key) { delete mockStore[key]; },
  clear: function() { mockStore = {}; }
};
Object.defineProperty(window, 'localStorage', { value: lsMock });
beforeEach(function() { lsMock.clear(); });

test('renders the app header with title', function() {
  render(<App />);
  expect(screen.getByText(/Simple Notes Keeper/i)).toBeInTheDocument();
});

test('renders the placeholder when no note is selected', function() {
  render(<App />);
  expect(screen.getByText(/Select a note/i)).toBeInTheDocument();
});

test('renders the floating add button', function() {
  render(<App />);
  expect(screen.getByLabelText(/Create new note/i)).toBeInTheDocument();
});

test('renders the search bar', function() {
  render(<App />);
  expect(screen.getByPlaceholderText(/Search notes/i)).toBeInTheDocument();
});
