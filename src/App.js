import AllRoutes from "./AllRoutes";
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className='App'>
      {/* <header className="App-header">
        <h1>Study Interests App</h1>
      </header> */}

      <div className="header">Doubt Smasher</div>
      <div className="main-container">
        <AllRoutes />
      </div>
      <Sidebar />

    </div>
  );
}

export default App;
//
// function App() {
//   return (
//     <div className='App'>
//       <h1>Doubt Smasher</h1>
//       <AllRoutes />
//     </div>
//   );
// }
//
// export default App;
