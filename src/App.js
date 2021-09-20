import './App.css';
import React, { useState, useContext, useEffect } from "react";
import StartScreen from './components/MainMenu';
import CreateQuizScreen from './components/CreateQuizScreen'
import EditQuizScreen from './components/EditQuizScreen'
import { Quiz } from './controllers/context'

function App() {
  const [CurrentState, SetState] = useState("start"); //initial screen is the start screen


  return (
    <div className="App">
      <Quiz.Provider value={{ CurrentState, SetState }}>
        {CurrentState === "start" && <StartScreen />}
        {CurrentState === "create" && <CreateQuizScreen />}
        {CurrentState === "edit" && <EditQuizScreen />}
      </Quiz.Provider>
    </div>
  );
}

export default App;
