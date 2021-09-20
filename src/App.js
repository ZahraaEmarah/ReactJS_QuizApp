import './App.css';
import React, { useState, useContext } from "react";
import StartScreen from './components/Start';
import QuizScreen from './components/QuizScreen'
import EndScreen from './components/End'
import { Quiz } from './controllers/context'

function App() {
  const [CurrentState, SetState] = useState("start"); //initial screen is the start screen
  return (
    <div className="App">
      <h1>Quizme.com</h1>
      <Quiz.Provider value={{ CurrentState, SetState }}>
        {CurrentState === "start" && <StartScreen />}
        {CurrentState === "quiz" && <QuizScreen />}
        {CurrentState === "end" && <EndScreen />}
      </Quiz.Provider>
    </div>
  );
}

export default App;
