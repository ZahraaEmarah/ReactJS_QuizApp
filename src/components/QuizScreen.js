import React, { useContext } from 'react';
import { Quiz } from '../controllers/context'

export default function QuizScreen() {

    const { CurrentState, SetState } = useContext(Quiz);

    return (
        <div>
            <h2>Quiz</h2>
            <button onClick={() => {
                SetState("end");
            }}>Exit Quiz</button>
        </div>

    );
}