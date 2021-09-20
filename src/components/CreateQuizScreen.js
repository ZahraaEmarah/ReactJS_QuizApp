import React, { useContext } from 'react';
import { Quiz } from '../controllers/context'

export default function CreateQuizScreen() {

    const { CurrentState, SetState } = useContext(Quiz);

    return (
        <div className="Menu">
            <h2>Create New Quiz</h2>
            <button className="btn" onClick={() => {
                SetState("start");
            }}>Create</button>

            <button className="btn" onClick={() => {
                SetState("start");
            }}>Discard</button>
        </div>

    );
}