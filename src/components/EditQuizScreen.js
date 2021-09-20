import React, {useContext} from 'react';
import { Quiz } from '../controllers/context'

export default function EditQuizScreen() {

    const { CurrentState, SetState } = useContext(Quiz);

    return (
        <div>
            <h2>Edit Quiz</h2>
            <button onClick={() => {
                SetState("start");
            }}>Save Changes</button>
        </div>
    );
}