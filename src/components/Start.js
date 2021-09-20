import React, { useContext } from 'react';
import { Quiz } from '../controllers/context'

export default function Start() {

    const { CurrentState, SetState } = useContext(Quiz);
    return (
        <div>
            <button onClick={() => {
                SetState("quiz");
            }}>Start Quiz</button>
        </div>
    );
}