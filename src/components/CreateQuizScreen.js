import React, { useContext } from 'react';
import { Quiz } from '../controllers/context'

export default function CreateQuizScreen() {

    const { CurrentState, SetState } = useContext(Quiz);

    return (
        <div>
            <h2>Create New Quiz</h2>
            <button onClick={() => {
                SetState("start");
            }}>Create</button>

            <button onClick={() => {
                SetState("start");
            }}>Discard</button>
        </div>

    );
}