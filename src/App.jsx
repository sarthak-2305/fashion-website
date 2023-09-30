import React from 'react';
import Topbar from './Topbar/Topbar'; // Adjust the import path
import Middlebar from './Middlebar/Middlebar';
import Bottombar from './Bottombar/Bottombar';

function App() {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: "column", 
      height: "100vh"
    }}>
      <Topbar />
      <Middlebar />
      <Bottombar />
    </div>
  );
}

export default App;
