import React, {useContext} from 'react';
import { Quiz } from '../controllers/context'

export default function End() {

    const { CurrentState, SetState } = useContext(Quiz);

    return (
        <div>
            <h2>Done</h2>
            <button onClick={() => {
                SetState("start");
            }}>Re-take Quiz</button>
        </div>
    );
}