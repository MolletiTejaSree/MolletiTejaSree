import React from 'react';
import Course from './Components/Course/Course';
import Navbar from './Components/Layout/Navigation/Navbar';
function App() {
  return (
     <div className="App">
      <Navbar value="Its my Code"/>
      <Course/>
     </div>
  );
}
export default App;