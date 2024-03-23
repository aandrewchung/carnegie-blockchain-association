import React from 'react';
import './App.css';
import DirectoryPage from './components/DirectoryPage'; // Adjust the import path as necessary

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Carnegie Blockchain Association
      </header>
      <main>
        <DirectoryPage />
      </main>
      <footer>
        Join the telegram!
      </footer>
    </div>
  );
}

export default App;
