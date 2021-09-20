import React, {useContext} from 'react';
import { Quiz } from '../controllers/context'

export default function EditQuizScreen() {

    const { CurrentState, SetState } = useContext(Quiz);

    return (
        <div className="Menu">
            <h2>Edit Quiz</h2>
            <button className="btn" onClick={() => {
                SetState("start");
            }}>Save Changes</button>
        </div>
    );
}