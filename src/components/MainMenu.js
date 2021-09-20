import {useContext} from 'react'
import { Quiz } from '../controllers/context'
import Sidebar from './Sidebar';
import Data from '../data/data.json'

export default function MainMenu() {

    const { CurrentState, SetState } = useContext(Quiz);
    return (
        <div className="Menu">
            <Sidebar data={Data} />
        </div>
    );
}