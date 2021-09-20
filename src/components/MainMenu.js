import React, { useContext } from 'react';
import { Quiz } from '../controllers/context'

export default function MainMenu() {

    const { CurrentState, SetState } = useContext(Quiz);
    return (
        <div>
            <button onClick={() => {
                SetState("create");
            }}>Create Quiz</button><br></br><br></br>
            <button onClick={() => {
                SetState("edit");
            }}>Edit Quiz</button>
        </div>
    );
}