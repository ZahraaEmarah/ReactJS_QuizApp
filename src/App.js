import './App.css';
import React, { useState, useContext} from "react";
import StartScreen from './components/MainMenu'
import CreateQuizScreen from './components/CreateQuizScreen'
import EditQuizScreen from './components/EditQuizScreen'
import { Quiz } from './controllers/context'
import { QuizId } from './controllers/context'
import SideBar from './components/Sidebar';
import Data from './data/data.json'
function App() {

  const [CurrentState, SetState] = useState("start"); //initial screen is the start screen

  return (
    <div className="App">
      <StartScreen />
      <Quiz.Provider value={{ CurrentState, SetState }}>
        {CurrentState === "create" && <CreateQuizScreen />}
        {CurrentState === "edit" && <EditQuizScreen />}
      </Quiz.Provider>
    </div>
  );
}

export default App;
